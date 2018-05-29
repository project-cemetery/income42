import { inject, injectable } from 'inversify'
import { groupBy } from 'lodash'
import { getCustomRepository } from 'typeorm'

import { Transaction } from '@income42/entity'
import { TransactionRepository } from '@income42/repository'
import { DateUtil, StatisticsCalculator, TYPES } from '@income42/service'

import { AggregationEnum, IncomePeriod, IncomeSource } from '../model'

@injectable()
export default class SimpleStatisticsCalculator implements StatisticsCalculator {

    @inject(TYPES.DateUtil) private dateUtil: DateUtil

    public async incomeByPeriods(userId: number, start: Date, end: Date, aggregation: AggregationEnum) {

        const groups = groupBy(
            (await this.getTransactions(userId, start, end))
                .map((transaction) => ({
                    ...transaction,
                    createdAt: this.dateUtil.truncate(transaction.createdAt, aggregation),
                })),
            (transaction: Transaction) => transaction.createdAt,
        )

        return Object.keys(groups)
            .map((key: string) => ({
                title: key,
                start: new Date(key),
                end: this.dateUtil.add(new Date(key), aggregation),
                amount: (groups[key] || [])
                    .map((transaction) => transaction.amount)
                    .reduce((prev, cur) => prev + cur),
            } as IncomePeriod))
    }

    public async incomeBySources(userId: number, start: Date, end: Date) {

        const groups = groupBy(
            (await this.getTransactions(userId, start, end)),
            (transaction: Transaction) => transaction.source,
        )

        return Object.keys(groups)
            .map((source: string) => ({
                source, start, end,
                amount: (groups[source] || [])
                    .map((transaction) => transaction.amount)
                    .reduce((prev, cur) => prev + cur),
            } as IncomeSource))
    }

    private async getTransactions(userId: number, start: Date, end: Date) {
        return await getCustomRepository(TransactionRepository).findByInterval(userId, start, end)
    }

}

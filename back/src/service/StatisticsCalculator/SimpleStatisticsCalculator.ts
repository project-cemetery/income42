import { inject, injectable } from 'inversify'
import { groupBy } from 'lodash'
import { getCustomRepository } from 'typeorm'

import { Transaction } from '../../entity'
import TransactionRepositiry from '../../repository/TransactionRepository'
import DateAdder from '../DateAdder/DateAdder'
import DateTruncater from '../DateTruncater/DateTruncater'
import AggregationEnum from '../model/AggregationEnum'
import IncomePeriod from '../model/IncomePeriod'
import TYPES from '../types'
import StatisticsCalculator from './StatisticsCalculator'

@injectable()
export default class SimpleStatisticsCalculator implements StatisticsCalculator {

    @inject(TYPES.DateTruncater) private dateTruncater: DateTruncater
    @inject(TYPES.DateAdder) private dateAdder: DateAdder

    public async incomeByPeriods(userId: number, start: Date, end: Date, aggregation: AggregationEnum) {
        const transactions = await getCustomRepository(TransactionRepositiry)
            .findByInterval(userId, start, end)

        const groups = groupBy(
            transactions.map((transaction) => ({
                ...transaction,
                createdAt: this.dateTruncater.truncate(transaction.createdAt, aggregation),
            })),
            (transaction: Transaction) => transaction.createdAt,
        )

        return Object.keys(groups)
            .map((key: string) => ({
                title: key,
                start: new Date(key),
                end: this.dateAdder.add(new Date(key), aggregation),
                amount: groups[key]
                    .map((transaction) => transaction.amount)
                    .reduce((prev, cur) => prev + cur),
            } as IncomePeriod))
    }

}

import { AggregationEnum, IncomePeriod, IncomeSource } from '../model'

export default interface StatisticsCalculator {

    incomeByPeriods(
        userId: number,
        start: Date,
        end: Date,
        aggregation: AggregationEnum,
    ): Promise<IncomePeriod[]>

    incomeBySources(
        userId: number,
        start: Date,
        end: Date,
    ): Promise<IncomeSource[]>

}

import AggregationEnum from '../model/AggregationEnum'
import IncomePeriod from '../model/IncomePeriod'

export default interface StatisticsCalculator {
    incomeByPeriods(
        userId: number,
        start: Date,
        end: Date,
        aggregation: AggregationEnum,
    ): IncomePeriod[]
}

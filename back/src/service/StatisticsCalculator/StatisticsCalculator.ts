import AggregationEnum from '../model/AggregationEnum'
import IncomePeriod from '../model/IncomePeriod'
import IncomeSource from '../model/IncomeSource'

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

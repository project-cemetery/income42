import { injectable } from 'inversify'

import AggregationEnum from '../model/AggregationEnum'
import StatisticsCalculator from './StatisticsCalculator'

@injectable()
export default class SimpleStatisticsCalculator implements StatisticsCalculator {

    public incomeByPeriods(userId: number, start: Date, end: Date, aggregation: AggregationEnum) {
        return []
    }

}

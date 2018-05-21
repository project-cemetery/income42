import { inject, injectable } from 'inversify'

import AggregationEnum from '../model/AggregationEnum'
import TimeUtil from '../TimeUtil/TimeUtil'
import TYPES from '../types'
import DateTruncater from './DateTruncater'

@injectable()
export default class SimpleDateTruncater implements DateTruncater {

    @inject(TYPES.TimeUtil) private timeUtil: TimeUtil

    public truncateByYear(date: Date) {
        return this.timeUtil.resetTime(new Date(Date.UTC(
            date.getFullYear(),
            0,
        )))
    }

    public truncateByMonth(date: Date) {
        return this.timeUtil.resetTime(new Date(Date.UTC(
            date.getFullYear(),
            date.getMonth(),
        )))
    }

    public truncateByWeek(date: Date) {
        const day = date.getDay()
        const diff = date.getDate() - day + (day === 0 ? -6 : 1)

        return this.timeUtil.resetTime(new Date(date.setDate(diff)))
    }

    public truncate(date: Date, aggregation: AggregationEnum) {
        switch (aggregation) {
            case AggregationEnum.year:
                return this.truncateByYear(date)
            case AggregationEnum.month:
                return this.truncateByMonth(date)
            case AggregationEnum.week:
                return this.truncateByWeek(date)
            default:
                throw Error('Unknown aggregation')
        }
    }
}

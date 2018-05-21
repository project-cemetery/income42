import { injectable } from 'inversify'

import AggregationEnum from '../model/AggregationEnum'
import DateAdder from './DateAdder'

@injectable()
export default class SimpleDateAdder implements DateAdder {

    public addYear(date: Date) {
        return new Date(
            date.getFullYear() + 1,
            date.getMonth(),
            date.getDate() - 1,
        )
    }

    public addMonth(date: Date) {
        return new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate() - 1,
        )
    }

    public addWeek(date: Date) {
        const newDate = new Date(date)
        newDate.setDate(date.getDate() + 6)

        return newDate
    }

    public add(date: Date, aggregation: AggregationEnum) {
        switch (aggregation) {
            case AggregationEnum.year:
                return this.addYear(date)
            case AggregationEnum.month:
                return this.addMonth(date)
            case AggregationEnum.week:
                return this.addWeek(date)
            default:
                throw Error('Unknown aggregation')
        }
    }

}

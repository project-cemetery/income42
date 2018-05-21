import { inject, injectable } from 'inversify'

import { DateUtil, TYPES } from '../../service'
import { AggregationEnum } from '../model'

@injectable()
export default class SimpleDateUtil implements DateUtil {

    public add(date: Date, aggregation: AggregationEnum) {

        const addYear = (d: Date) => new Date(
            d.getFullYear() + 1,
            d.getMonth(),
            d.getDate() - 1,
        )

        const addMonth = (d: Date) => new Date(
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate() - 1,
        )

        const addWeek = (d: Date) => {
            const newDate = new Date(d)
            newDate.setDate(d.getDate() + 6)

            return newDate
        }

        switch (aggregation) {
            case AggregationEnum.year:
                return addYear(date)
            case AggregationEnum.month:
                return addMonth(date)
            case AggregationEnum.week:
                return addWeek(date)
            default:
                throw Error('Unknown aggregation')
        }
    }

    public truncate(date: Date, aggregation: AggregationEnum) {

        const truncateByYear = (d: Date) => this.resetTime(
            new Date(Date.UTC(
                d.getFullYear(),
                0,
            )))

        const truncateByMonth = (d: Date) => this.resetTime(
            new Date(Date.UTC(
                d.getFullYear(),
                d.getMonth(),
            )))

        const truncateByWeek = (d: Date) => {
            const day = d.getDay()
            const diff = d.getDate() - day + (day === 0 ? -6 : 1)

            return this.resetTime(new Date(d.setDate(diff)))
        }

        switch (aggregation) {
            case AggregationEnum.year:
                return truncateByYear(date)
            case AggregationEnum.month:
                return truncateByMonth(date)
            case AggregationEnum.week:
                return truncateByWeek(date)
            default:
                throw Error('Unknown aggregation')
        }
    }

    private resetTime = (date: Date) => new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
    ))

}

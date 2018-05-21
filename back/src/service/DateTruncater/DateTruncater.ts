import AggregationEnum from '../model/AggregationEnum'

export default interface DateUtils {

    truncateByYear(date: Date): Date
    truncateByMonth(date: Date): Date
    truncateByWeek(date: Date): Date

    truncate(date: Date, aggregation: AggregationEnum): Date
}

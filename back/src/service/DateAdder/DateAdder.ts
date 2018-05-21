import AggregationEnum from '../model/AggregationEnum'

export default interface DateAdder {

    addYear(date: Date): Date
    addMonth(date: Date): Date
    addWeek(date: Date): Date

    add(date: Date, aggregation: AggregationEnum): Date
}

import { AggregationEnum } from '../model'

export default interface DateUtils {

    add(date: Date, aggregation: AggregationEnum): Date
    truncate(date: Date, aggregation: AggregationEnum): Date

}

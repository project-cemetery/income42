import { Moment } from 'moment'

export default interface Period {
    start: Moment
    end: Moment
    amount: number
}

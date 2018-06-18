import { Moment } from 'moment'

export default interface Source {
    start: Moment
    end: Moment
    amount: number
    source: string
}

import { injectable } from 'inversify'

import TimeUtil from './TimeUtil'

@injectable()
export default class SimpleTimeUtil implements TimeUtil {

    public resetTime(date: Date) {
        return new Date(Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
        ))
    }

}

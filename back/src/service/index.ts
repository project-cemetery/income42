import { Container } from 'inversify'

import TYPES from './types'

import BcryptPasswordEncoder from './PasswordEncoder/BcryptPasswordEncoder'
import PasswordEncoder from './PasswordEncoder/PasswordEncoder'

import SimpleStatisticsCalculator from './StatisticsCalculator/SimpleStatisticsCalculator'
import StatisitcsCalculator from './StatisticsCalculator/StatisticsCalculator'

import DateTruncater from './DateTruncater/DateTruncater'
import SimpleDateTruncater from './DateTruncater/SimpleDateTruncater'

import DateAdder from './DateAdder/DateAdder'
import SimpleDateAdder from './DateAdder/SimpleDateAdder'

import SimpleTimeUtil from './TimeUtil/SimpleTimeUtil'
import TimeUtil from './TimeUtil/TimeUtil'

const container = new Container()

container.bind<PasswordEncoder>(TYPES.PasswordEncoder).to(BcryptPasswordEncoder)
container.bind<StatisitcsCalculator>(TYPES.StatisticsCalculator).to(SimpleStatisticsCalculator)
container.bind<DateTruncater>(TYPES.DateTruncater).to(SimpleDateTruncater)
container.bind<DateAdder>(TYPES.DateAdder).to(SimpleDateAdder)
container.bind<TimeUtil>(TYPES.TimeUtil).to(SimpleTimeUtil)

export default container

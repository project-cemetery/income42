import { Container } from 'inversify'

import TYPES from './types'

import BcryptPasswordEncoder from './PasswordEncoder/BcryptPasswordEncoder'
import PasswordEncoder from './PasswordEncoder/PasswordEncoder'

import SimpleStatisticsCalculator from './StatisticsCalculator/SimpleStatisticsCalculator'
import StatisitcsCalculator from './StatisticsCalculator/StatisticsCalculator'

import DateUtil from './DateUtil/DateUtil'
import SimpleDateUtil from './DateUtil/SimpleDateUtil'

const container = new Container()

container.bind<PasswordEncoder>(TYPES.PasswordEncoder).to(BcryptPasswordEncoder)
container.bind<StatisitcsCalculator>(TYPES.StatisticsCalculator).to(SimpleStatisticsCalculator)
container.bind<DateUtil>(TYPES.DateUtil).to(SimpleDateUtil)

export default container

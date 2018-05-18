import { Container } from 'inversify'

import TYPES from './types'

import BcryptPasswordEncoder from './PasswordEncoder/BcryptPasswordEncoder'
import PasswordEncoder from './PasswordEncoder/PasswordEncoder'

import SimpleStatisticsCalculator from './StatisticsCalculator/SimpleStatisticsCalculator'
import StatisitcsCalculator from './StatisticsCalculator/StatisticsCalculator'

const container = new Container()

container.bind<PasswordEncoder>(TYPES.PasswordEncoder).to(BcryptPasswordEncoder)
container.bind<StatisitcsCalculator>(TYPES.StatisticsCalculator).to(SimpleStatisticsCalculator)

export default container

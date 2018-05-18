import { Container } from 'inversify'

import TYPES from './types'

import BcryptPasswordEncoder from './PasswordEncoder/BcryptPasswordEncoder'
import PasswordEncoder from './PasswordEncoder/PasswordEncoder'

const container = new Container()

container.bind<PasswordEncoder>(TYPES.PasswordEncoder).to(BcryptPasswordEncoder)

export default container

import { Container } from 'inversify'

import TYPES from './types'

import SimpleUserManager from './UserManager/SimpleUserManager'
import UserManager from './UserManager/UserManager'

import BcryptPasswordEncoder from './PasswordEncoder/BcryptPasswordEncoder'
import PasswordEncoder from './PasswordEncoder/PasswordEncoder'

const container = new Container()

container.bind<UserManager>(TYPES.UserManager).to(SimpleUserManager)
container.bind<PasswordEncoder>(TYPES.PasswordEncoder).to(BcryptPasswordEncoder)

export default container

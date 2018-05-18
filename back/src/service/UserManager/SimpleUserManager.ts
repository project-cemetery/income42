import { inject, injectable } from 'inversify'

import { User } from '../../entity'
import PasswordEncoder from '../PasswordEncoder/PasswordEncoder'
import TYPES from '../types'

import UserManager from './UserManager'

@injectable()
export default class SimpleUserManager implements UserManager {

    @inject(TYPES.PasswordEncoder) private encoder: PasswordEncoder

    public checkCredentials(user: User, password: string) {
        return this.encoder.compare(user.password, password)
    }

    public createUser(login: string, password: string) {
        const user = new User()

        user.login = login
        user.password = this.encoder.encode(password)

        return user
    }
}

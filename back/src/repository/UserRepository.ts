import { AbstractRepository, EntityRepository } from 'typeorm'

import { Account, Credentials, User } from '../entity'
import container from '../service'
import PasswordEncoder from '../service/PasswordEncoder/PasswordEncoder'
import TYPES from '../service/types'

@EntityRepository(User)
export default class UserRepository extends AbstractRepository<User> {

    private encoder: PasswordEncoder

    constructor() {
        super()

        this.encoder = container.get<PasswordEncoder>(TYPES.PasswordEncoder)
    }

    public createAndSave(login: string, password: string) {
        const credentials = new Credentials()
        credentials.login = login
        credentials.password = this.encoder.encode(password)

        const account = new Account()

        const user = new User()

        user.account = account
        user.credentials = credentials

        return this.manager.save(user)
    }

    public async findByLogin(login: string) {
        const userRepo = this.manager.getRepository(User)

        const user = await userRepo
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.credentials', 'credentials')
            .where('credentials.login = :login ', { login })
            .getOne()

        return user
    }

}

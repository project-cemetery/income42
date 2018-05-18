import { AbstractRepository, EntityRepository } from 'typeorm'

import { Account } from '../entity'
import container from '../service'

@EntityRepository(Account)
export default class AccountRepository extends AbstractRepository<Account> {

    public async findOneByUserId(userId: number) {
        return await this.manager
            .getRepository(Account)
            .createQueryBuilder('account')
            .leftJoinAndSelect('account.user', 'user')
            .where('user.id = :userId ', { userId })
            .getOne()
    }

}

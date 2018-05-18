import { AbstractRepository, EntityRepository } from 'typeorm'

import { Transaction } from '../entity'
import container from '../service'

@EntityRepository(Transaction)
export default class TransactionRepository extends AbstractRepository<Transaction> {

    public async findByUserId(userId: number) {
        return await this.manager
            .getRepository(Transaction)
            .createQueryBuilder('transaction')
            .leftJoinAndSelect('transaction.account', 'account')
            .leftJoinAndSelect('account.user', 'user')
            .where('user.id = :userId ', { userId })
            .getMany()
    }

}

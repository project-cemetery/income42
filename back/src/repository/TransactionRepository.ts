import { AbstractRepository, EntityRepository } from 'typeorm'

import { Transaction } from '../entity'
import container from '../service'

const DEFAULT_LIMIT = 50

@EntityRepository(Transaction)
export default class TransactionRepository extends AbstractRepository<Transaction> {

    public async findByUserId(userId: number, limit: number = DEFAULT_LIMIT) {
        return await this.manager
            .getRepository(Transaction)
            .createQueryBuilder('transaction')
            .leftJoinAndSelect('transaction.account', 'account')
            .leftJoinAndSelect('account.user', 'user')
            .where('user.id = :userId ', { userId })
            .limit(limit)
            .getMany()
    }

}

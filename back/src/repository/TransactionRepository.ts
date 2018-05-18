import { AbstractRepository, EntityRepository } from 'typeorm'

import { Transaction } from '../entity'
import container from '../service'

const DEFAULT_LIMIT = 50

@EntityRepository(Transaction)
export default class TransactionRepository extends AbstractRepository<Transaction> {

    public async findByInterval(userId: number, start: Date, end: Date) {
        return await this.getQueryBuilder(userId)
            .andWhere('transaction.createdAt > :start', { start })
            .andWhere('transaction.createdAt < :end', { end })
            .getMany()
    }

    private getQueryBuilder(userId: number) {
        return this.manager
            .getRepository(Transaction)
            .createQueryBuilder('transaction')
            .leftJoinAndSelect('transaction.account', 'account')
            .leftJoinAndSelect('account.user', 'user')
            .where('user.id = :userId ', { userId })
    }

}

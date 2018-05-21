import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql'

import { getCustomRepository, getRepository } from 'typeorm'

import { Transaction } from '@app/entity'
import { AccountRepository } from '@app/repository'
import TransactionType, { TransactionTypeInterface } from '../types/TransactionType'

export default {
    type: TransactionType,
    args: {
        amount: { type: GraphQLFloat },
        source: { type: GraphQLString },
    },
    resolve: async (_, { amount, source }, context): Promise<TransactionTypeInterface> => {
        const account = await getCustomRepository(AccountRepository)
            .findOneByUserId(context.user.id)

        const transaction = new Transaction()
        transaction.account = account
        transaction.amount = amount
        transaction.source = source

        await getRepository(Transaction).save(transaction)

        return {
            id: transaction.id,
            amount: transaction.amount,
            source: transaction.source,
        }
    },
}

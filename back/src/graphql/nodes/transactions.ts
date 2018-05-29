import { GraphQLList, GraphQLString } from 'graphql'
import { getCustomRepository } from 'typeorm'

import { TransactionRepository } from '@income42/repository'

import TransactionType, { TransactionTypeInterface } from '../types/TransactionType'

export default {
    type: new GraphQLList(TransactionType),
    args: {
        start: { type: GraphQLString },
        end:   { type: GraphQLString },
    },
    resolve: async (_1, { start, end }, context): Promise<TransactionTypeInterface[]> =>
        (await getCustomRepository(TransactionRepository)
            .findByInterval(
                parseInt(context.user.id, 10),
                !!start ? new Date(start) : new Date('0001-01-01'),
                !!end ? new Date(end) : new Date(),
            )).map((transaction) => ({
                ...transaction,
                createdAt: transaction.createdAt.toString(),
            })),
}

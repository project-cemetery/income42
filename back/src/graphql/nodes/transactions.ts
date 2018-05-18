import { GraphQLList, GraphQLString } from 'graphql'
import { getCustomRepository } from 'typeorm'

import TransactionRepositiry from '../../repository/TransactionRepository'
import TransactionType, { TransactionTypeInterface } from '../types/TransactionType'

export default {
    type: new GraphQLList(TransactionType),
    args: {
        start: { type: GraphQLString },
        end:   { type: GraphQLString },
    },
    resolve: async (_1, { start, end }, context): Promise<TransactionTypeInterface[]> =>
        (await getCustomRepository(TransactionRepositiry)
            .findByInterval(
                context.user.id,
                !!start ? new Date(start) : new Date('0001-01-01'),
                !!end ? new Date(end) : new Date(),
            )).map((transaction) => ({
                id: transaction.id,
                amount: transaction.amount,
                source: transaction.source,
                createdAt: transaction.createdAt,
            })),
}

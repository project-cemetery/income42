import { GraphQLInt, GraphQLList } from 'graphql'
import { getCustomRepository } from 'typeorm'

import TransactionRepositiry from '../../repository/TransactionRepository'
import TransactionType, { TransactionTypeInterface } from '../types/TransactionType'

export default {
    type: new GraphQLList(TransactionType),
    args: {
        limit: { type: GraphQLInt },
    },
    resolve: async (_1, { limit }, context): Promise<TransactionTypeInterface[]> =>
        (await getCustomRepository(TransactionRepositiry)
            .findByUserId(context.user.id, limit))
            .map((transaction) => ({
                id: transaction.id,
                amount: transaction.amount,
                source: transaction.source,
            })),
}

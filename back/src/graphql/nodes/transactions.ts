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
            .findByInterval(context.user.id, new Date(start), new Date(end)))
            .map((transaction) => ({
                id: transaction.id,
                amount: transaction.amount,
                source: transaction.source,
                createdAt: transaction.createdAt,
            })),
}

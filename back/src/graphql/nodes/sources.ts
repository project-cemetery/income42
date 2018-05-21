import { GraphQLList, GraphQLString } from 'graphql'

import TransactionRepositiry from '../../repository/TransactionRepository'
import SourceType, { SourceTypeInterface } from '../types/SourceType'

import container from '../../service'
import StatisticsCalculator from '../../service/StatisticsCalculator/StatisticsCalculator'
import TYPES from '../../service/types'

export default {
    type: new GraphQLList(SourceType),
    args: {
        start:     { type: GraphQLString   },
        end:       { type: GraphQLString   },
    },
    resolve: async (_1, { start, end }, context): Promise<SourceTypeInterface[]> =>
        (await container.get<StatisticsCalculator>(TYPES.StatisticsCalculator)
            .incomeBySources(
                parseInt(context.user.id, 10),
                !!start ? new Date(start) : new Date('0001-01-01'),
                !!end ? new Date(end) : new Date(),
            )).map((source) => ({
                ...source,
                start: source.start.toString(),
                end: source.end.toString(),
            })),
}

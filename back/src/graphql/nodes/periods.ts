import { GraphQLList, GraphQLString } from 'graphql'

import container, { StatisticsCalculator, TYPES } from '@app/service'

import AggregationType, { AggregationEnum } from '../types/AggregationType'
import PeriodType, { PeriodTypeInterface } from '../types/PeriodType'

export default {
    type: new GraphQLList(PeriodType),
    args: {
        start:     { type: GraphQLString   },
        end:       { type: GraphQLString   },
        aggregate: { type: AggregationType },
    },
    resolve: async (_1, { start, end, aggregate }, context): Promise<PeriodTypeInterface[]> =>
        (await container.get<StatisticsCalculator>(TYPES.StatisticsCalculator)
            .incomeByPeriods(
                parseInt(context.user.id, 10),
                !!start ? new Date(start) : new Date('0001-01-01'),
                !!end ? new Date(end) : new Date(),
                aggregate as AggregationEnum,
            )).map((period) => ({
                ...period,
                start: period.start.toString(),
                end: period.end.toString(),
            })),
}

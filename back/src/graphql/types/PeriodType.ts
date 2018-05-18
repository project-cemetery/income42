import { GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
    name: 'Period',
    fields: {
        start:  { type: GraphQLString },
        end:    { type: GraphQLString },
        amount: { type: GraphQLFloat  },
        title:  { type: GraphQLString },
    },
})

export interface PeriodTypeInterface {
    start: string
    end: string
    amount: number
    title: string
}

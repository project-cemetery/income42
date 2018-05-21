import { GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
    name: 'Source',
    fields: {
        start:  { type: GraphQLString },
        end:    { type: GraphQLString },
        amount: { type: GraphQLFloat  },
        source: { type: GraphQLString },
    },
})

export interface SourceTypeInterface {
    start: string
    end: string
    amount: number
    source: string
}

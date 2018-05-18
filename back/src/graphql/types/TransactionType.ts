import { GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
    name: 'Transaction',
    fields: {
        id:     { type: GraphQLInt },
        amount: { type: GraphQLFloat },
        source: { type: GraphQLString },
    },
})

export interface TransactionTypeInterface {
    id: number
    amount: number
    source: string
}

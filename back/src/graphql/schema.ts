
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import periods from './nodes/periods'
import sources from './nodes/sources'
import transactions from './nodes/transactions'
import user from './nodes/user'

import createTransaction from './mutations/createTransaction'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            periods,
            sources,
            transactions,
            user,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createTransaction,
        },
    }),
})

export default schema

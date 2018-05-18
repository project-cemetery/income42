
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import user from './nodes/user'

import createTransaction from './mutations/createTransaction'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
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

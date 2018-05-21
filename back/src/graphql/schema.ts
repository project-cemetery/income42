
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import * as mutations from './mutations'
import * as nodes from './nodes'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...nodes,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            ...mutations,
        },
    }),
})

export default schema

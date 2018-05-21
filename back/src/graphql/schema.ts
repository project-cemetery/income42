
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import * as nodes from './nodes'
import * as mutations from './mutations'

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

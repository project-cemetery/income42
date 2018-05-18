
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import * as user from './types/User'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user,
        },
    }),
})

export default schema

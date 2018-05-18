import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
    name: 'User',
    fields: {
        id:    { type: GraphQLInt },
        login: { type: GraphQLString },
    },
})

export interface UserTypeInterface {
    id: number
    login: string
}

import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

import { getRepository } from 'typeorm'

import { User } from '../../entity'
import { forbidden, notFound } from '../utils/errors'

export const type = new GraphQLObjectType({
    name: 'User',
    fields: {
        id:    { type: GraphQLInt },
        login: { type: GraphQLString },
    },
})

export const args = {
    id: { type: GraphQLInt },
}

export const resolve = async (_, { id }, context) => {
    if (context.user.id !== id) {
        throw forbidden()
    }

    const userRepo = getRepository(User)

    const user = await userRepo.findOne(id, { relations: ['credentials'] })

    if (!user) {
        throw notFound()
    }

    return {
        id: user.id,
        login: user.credentials.login,
    }
}

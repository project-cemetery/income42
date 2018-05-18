import { getRepository } from 'typeorm'

import { User } from '../../entity'
import UserType, { UserTypeInterface } from '../types/UserType'

export default {
    type: UserType,
    resolve: async (_1, _2, context): Promise<UserTypeInterface> => {
        const user = await getRepository(User)
            .findOne(
                context.user.id,
                { relations: ['credentials'] },
            )

        return {
            id: user.id,
            login: user.credentials.login,
        }
    },
}

import * as express from 'express'
import { getRepository } from 'typeorm'

import { User } from '../entity'
import container from '../service'
import TYPES from '../service/types'
import UserManager from '../service/UserManager/UserManager'

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const secret = process.env.JWT_SECRET

    const { login, password } = req.body

    const userRepository = getRepository(User)
    const userManager = container.get<UserManager>(TYPES.UserManager)

    const user = userManager.createUser(login, password)

    await userRepository.save(user)

    res.send()
}

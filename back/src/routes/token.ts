import * as express from 'express'
import * as httpCodes from 'http-status-codes'
import * as jwt from 'jsonwebtoken'
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

    const user = await userRepository.findOne({ login })

    const passwordValid = userManager.checkCredentials(user, password)

    if (passwordValid) {
        const token = jwt.sign({ id: user.id }, secret)

        res.send(token)
    } else {
        res.status(httpCodes.UNAUTHORIZED)
        res.send()
    }
}

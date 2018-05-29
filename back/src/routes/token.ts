import * as express from 'express'
import * as httpCodes from 'http-status-codes'
import * as jwt from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '@income42/repository'
import container, { PasswordEncoder, TYPES } from '@income42/service'

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const secret = process.env.JWT_SECRET

    const { login, password } = req.body

    const userRepository = getCustomRepository(UserRepository)
    const passwordEncoder = container.get<PasswordEncoder>(TYPES.PasswordEncoder)

    const user = await userRepository.findOneByLogin(login)

    if (!user) {
        res.status(httpCodes.NOT_FOUND)
        res.send()

        return
    }

    const passwordValid = passwordEncoder.compare(user.credentials.password, password)

    if (passwordValid) {
        const token = jwt.sign({ id: user.id }, secret || 'not-secret')

        res.send(token)
    } else {
        res.status(httpCodes.UNAUTHORIZED)
        res.send()
    }
}

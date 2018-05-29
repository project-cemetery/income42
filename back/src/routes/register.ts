import * as express from 'express'
import * as httpCodes from 'http-status-codes'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '@income42/repository'

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const { login, password } = req.body

    const userRepository = getCustomRepository(UserRepository)

    try {
        await userRepository.createAndSave(login, password)
    } catch {
        res.status(httpCodes.CONFLICT)
        res.send()

        return
    }

    res.status(httpCodes.CREATED)
    res.send()
}

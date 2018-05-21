import * as express from 'express'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '@app/repository'

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const { login, password } = req.body

    const userRepository = getCustomRepository(UserRepository)

    await userRepository.createAndSave(login, password)

    res.send()
}

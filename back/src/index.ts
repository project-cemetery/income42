import 'reflect-metadata'

import { createConnection } from 'typeorm'

import Server from '@income42/Server'

const PORT = 8841

const start = async () => {
    const connection = await createConnection()

    Server.start(PORT)

    // tslint:disable-next-line:no-console
    console.log('App started!')
}

start()

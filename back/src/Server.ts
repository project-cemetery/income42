import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as jwt from 'express-jwt'

import graphqlMiddleware from '@app/graphql/middleware'
import { homepage, register, token } from '@app/routes'

export default class Server {
    public static start = (port: number): Server => {
        const server = new Server()
        server.app.listen(port)

        return server
    }

    private app: express.Application

    constructor() {
        this.app = express()

        this.config()
        this.router()
    }

    private config() {
        this.app.use(bodyParser.json())

        // JWT
        const secret = process.env.JWT_SECRET || 'not-secret'
        this.app.use(jwt({ secret }).unless({ path: ['/register', '/token'] }))

        // GrapQL
        this.app.use('/graphql', graphqlMiddleware)
    }

    private router() {
        const router = express.Router()

        router.get('/', homepage)

        router.post('/register', register)
        router.post('/token', token)

        this.app.use(router)
    }
}

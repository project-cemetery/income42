import * as express from 'express'
import * as jwt from 'express-jwt'

import graphqlMiddleware from './graphql/middleware'
import { homepage } from './routes'

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
        // JWT
        const secret = process.env.JWT_SECRET
        this.app.use(jwt({ secret }))

        // GrapQL
        this.app.use('/graphql', graphqlMiddleware)
    }

    private router() {
        const router = express.Router()

        router.get('/', homepage)

        this.app.use(router)
    }
}

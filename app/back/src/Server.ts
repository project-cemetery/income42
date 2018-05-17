import * as express from 'express'

import { graphql, homepage } from './routes'

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
        // pass
    }

    private router() {
        const router = express.Router()

        router.get('/', homepage)

        // GrapQL API
        this.app.use('/graphql', graphql)

        this.app.use(router)
    }
}

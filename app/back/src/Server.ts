import * as express from 'express'

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
        // pass
    }

    private router() {
        const router = express.Router()

        router.get('/', homepage)

        this.app.use(router)
    }
}

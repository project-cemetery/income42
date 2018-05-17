
import { buildSchema } from 'graphql'

export const schema = buildSchema(`
    type Query {
        message: String
    }
`)

export const root = {
    message: () => 'Hello World!',
}

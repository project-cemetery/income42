import * as expressGraphql from 'express-graphql'

import { root, schema } from './schema'

export default expressGraphql({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'dev',
})

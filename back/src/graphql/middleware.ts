import * as expressGraphql from 'express-graphql'

import schema from './schema'

export default expressGraphql({
    schema,
    graphiql: process.env.NODE_ENV === 'dev',
})

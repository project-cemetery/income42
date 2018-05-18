interface ResolveError {
    reason: string
    message?: string
}

const anyError = (errorMessage: string, message?: string) => !!message
    ? Error(`${errorMessage}: ${message}`)
    : Error(errorMessage)

export const notFound = (msg?: string) => anyError('Not found', msg)

export const forbidden = (msg?: string) => anyError('Forbidden', msg)

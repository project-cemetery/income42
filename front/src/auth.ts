import axios from 'axios'
import * as httpCode from 'http-status-codes'

const TOKEN_KEY = 'token'
const BACK_URL = `${window.location.origin}`

const token = () => localStorage.getItem(TOKEN_KEY)

export const isAuthenticated = () => !!token()
        ? axios
            .post(`${BACK_URL}/check`, {}, { headers: { Authorization: `bearer ${token()}` } })
            .then((response) => response.status !== httpCode.UNAUTHORIZED)
        : Promise.resolve(false)

export const signIn = async (login: string, password: string) => {
    const response = await axios.post(`${BACK_URL}/token`, { login, password })

    // TODO: handle response!

    return (response.data as string)
}

export const signOut = () => Promise.resolve(localStorage.removeItem(TOKEN_KEY))

export const signUp = async (login: string, password: string) => {
    await axios.post(`${BACK_URL}/register`, { login, password })

    // TODO: handle response!

    return signIn(login, password)
}

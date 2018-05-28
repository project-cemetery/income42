import axios from 'axios'
import * as httpCode from 'http-status-codes'

import { BACK_URL } from '@app/config'

const TOKEN_KEY = 'token'

const getLocalToken = () => localStorage.getItem(TOKEN_KEY)
const setLocalToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
const clearLocalToken = () => localStorage.removeItem(TOKEN_KEY)

export const isAuthenticated = () => !!getLocalToken()
        ? axios
            .post(`${BACK_URL}/check`, {}, { headers: { Authorization: `bearer ${getLocalToken()}` } })
            .then(
                (res) => res.status !== httpCode.UNAUTHORIZED,
                (err) => false,
            )
        : Promise.resolve(false)

export const signIn = async (login: string, password: string) =>
    axios.post(`${BACK_URL}/token`, { login, password }).then(
        (res) => {
            const token = (res.data as string)

            setLocalToken(token)

            return token
        },
        (err) => {
            if (err.response) {
                switch (err.response.status) {
                    case httpCode.UNAUTHORIZED:
                        throw new Error('Invalid password')
                    case httpCode.NOT_FOUND:
                        throw new Error('User not found')
                    default:
                        throw new Error('Something went wrong')
                }
            }
        },
    )

export const signOut = () => Promise.resolve(
    clearLocalToken(),
)

export const signUp = async (login: string, password: string) => {
    await axios.post(`${BACK_URL}/register`, { login, password })

    // TODO: handle response!

    return signIn(login, password)
}

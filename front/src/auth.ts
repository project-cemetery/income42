import axios, { AxiosError } from 'axios'
import * as httpCode from 'http-status-codes'

import { BACK_URL } from '@app/config'

const TOKEN_KEY = 'token'

const getLocalToken = () => localStorage.getItem(TOKEN_KEY)
const setLocalToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
const clearLocalToken = () => localStorage.removeItem(TOKEN_KEY)

const handleHttpError = (err: AxiosError) => {
    const throwDefaultError = () => {
        throw new Error('Something went wrong')
    }

    if (err.response) {
        switch (err.response.status) {
            case httpCode.CONFLICT:
                throw new Error('Login already taken')
            case httpCode.UNAUTHORIZED:
                throw new Error('Invalid password')
            case httpCode.NOT_FOUND:
                throw new Error('User not found')
            default:
                throwDefaultError()
        }
    } else {
        throwDefaultError()
    }
}

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
        (err) => handleHttpError(err),
    )

export const signUp = (login: string, password: string) =>
    axios.post(`${BACK_URL}/register`, { login, password }).then(
        (res) => signIn(login, password),
        (err) => handleHttpError(err),
    )

export const signOut = () => Promise.resolve(
    clearLocalToken(),
)

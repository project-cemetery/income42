import * as React from 'react'

import { isAuthenticated, signIn, signOut, signUp } from '@income42/auth'

import App from '@income42/app/App'
import Landing from '@income42/landing/Landing'

interface State {
    loaded: boolean
    authenticated: boolean
}

export default class Main extends React.Component<{}, State> {

    public state = {
        loaded: false,
        authenticated: false,
    }

    public render() {
        return !this.state.loaded
            ? null
            : this.state.authenticated
                ? <App signOut={this.signOut} />
                : <Landing signIn={this.signIn} signUp={this.signUp} />
    }

    public componentDidMount() {
        this.checkAuth()
    }

    private setAuth = (result: boolean) => this.setState({
        loaded: true,
        authenticated: result,
    })

    private checkAuth = () => isAuthenticated()
        .then(this.setAuth)

    private signIn = (login: string, password: string) => signIn(login, password)
        .then(() => this.setAuth(true))

    private signOut = () => signOut()
        .then(() => this.setAuth(false))

    private signUp = (login: string, password: string) => signUp(login, password)
        .then(() => this.setAuth(true))
}

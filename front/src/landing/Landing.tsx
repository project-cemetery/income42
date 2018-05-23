import * as React from 'react'

import SignInWidget from './SignInWidget'

interface Props {
    signIn: (login: string, password: string) => Promise<void>
    signUp: (login: string, password: string) => void
}

export default class Landing extends React.Component<Props, {}> {

    public render() {
        return (
            <div>
                <SignInWidget signIn={this.props.signIn} />
                <p>...</p>
            </div>
        )
    }

}

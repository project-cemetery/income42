import * as React from 'react'

interface Props {
    signIn: (login: string, password: string) => void
    signUp: (login: string, password: string) => void
}

export default class Landing extends React.Component<Props, {}> {

    public render() {

        // const { signIn, signUp } = this.props

        return <p>...</p>
    }

}

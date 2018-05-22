import * as React from 'react'

interface Props {
    signOut: () => void
}

export default class App extends React.PureComponent<Props, {}> {

    public render() {
        return <p>app</p>
    }

}

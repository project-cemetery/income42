import * as React from 'react'

import { createBrowserHistory } from 'history'
import { Redirect, Route, Router, Switch } from 'react-router-dom'

import AppBar from '@income42/app/components/AppBar'

import routes from './routes'

interface Props {
    signOut: () => Promise<void>
}

const hist = createBrowserHistory()

export default class App extends React.PureComponent<Props, {}> {

    public render() {
        return (
            <Router history={hist}>
                <React.Fragment>
                    <AppBar signOut={this.props.signOut} />
                    {this.renderSwitch()}
                </React.Fragment>
            </Router>
        )
    }

    private renderSwitch = () => (
        <Switch>
            {routes.map((prop, key) => prop.redirect
                ? <Redirect from={prop.path} to={prop.to!} key={key} />
                : <Route path={prop.path} component={prop.component} key={key} />,
            )}
        </Switch>
    )

}

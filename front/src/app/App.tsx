import * as React from 'react'

import { createBrowserHistory } from 'history'
import { Redirect, Route, Router, Switch } from 'react-router-dom'

import routes from './routes'

interface Props {
    signOut: () => void
}

const hist = createBrowserHistory()

export default class App extends React.PureComponent<Props, {}> {

    public render() {
        return (
            <Router history={hist}>
                <React.Fragment>
                    <p>sidebar</p>
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

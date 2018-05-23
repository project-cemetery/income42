import * as React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

interface Props {
    signIn: (login: string, password: string) => Promise<void>
}

interface State {
    login: string
    password: string
}

const styles = (theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    } as any,
    textField: {
        flex: '50%',
    },

    [theme.breakpoints.down('sm')]: {
        textField: {
            flex: '100%',
            marginTop: theme.spacing.unit,
        },
    },
})

type StyleProps = WithStyles<'container' | 'textField'>

class SignInWidget extends React.Component<Props & StyleProps, State> {

    public state = {
        login: '',
        password: '',
    } as State

    public render() {

        const { classes } = this.props

        return (
            <Card component="form">
                <CardContent className={classes.container}>
                    <TextField
                        id="login" label="Login"
                        className={classes.textField}
                        onChange={this.changeLogin}
                    />
                    <TextField
                        id="password" label="Password"
                        className={classes.textField}
                        onChange={this.changePassword}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={this.handleSignIn}
                    >Sign In</Button>
                </CardActions>
            </Card>
        )
    }

    private changeLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ login: e.target.value })

    private changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ password: e.target.value })

    private handleSignIn = () => {

        const { login, password } = this.state

        this.props.signIn(login, password)
            // tslint:disable-next-line:no-console
            .catch((error) => console.log(error))
    }

}

export default withStyles(styles)(SignInWidget)

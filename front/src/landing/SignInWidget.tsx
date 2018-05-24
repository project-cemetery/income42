import * as React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { Form } from 'react-final-form'

import TextField from '@app/common/form/TextField'
import { required } from '@app/utils/validators'

interface FormFields {
    login: string
    password: string
}

interface Props {
    signIn: (login: string, password: string) => Promise<void>
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

class SignInWidget extends React.Component<Props & StyleProps, {}> {

    private initialValues = {
        login: '',
        password: '',
    } as FormFields

    public render() {

        const { classes } = this.props

        return (
            <Form
                onSubmit={this.handleSignIn}
                initialValues={this.initialValues}
            >
                {(formProps) => (
                    <Card component="form">

                        <CardContent className={classes.container}>
                            <TextField
                                id="login" label="Login"
                                className={classes.textField}
                                validate={required}
                            />
                            <TextField
                                id="password" label="Password"
                                className={classes.textField}
                                validate={required} type="password"
                            />
                        </CardContent>

                        <CardActions>
                            <Button
                                type="submit" size="small"
                                onClick={(e) => {
                                    e.preventDefault()
                                    formProps.handleSubmit()
                                }}
                            >Sign In</Button>
                        </CardActions>

                    </Card>
                )}
            </Form>
        )
    }

    private handleSignIn = (values: FormFields) => {
        const { login, password } = values

        this.props.signIn(login, password)
            // tslint:disable-next-line:no-console
            .catch((error) => console.log(error))
    }

}

export default withStyles(styles)(SignInWidget)

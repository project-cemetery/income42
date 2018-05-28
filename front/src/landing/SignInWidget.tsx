import * as React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
        flex: '100%',
        marginTop: theme.spacing.unit,
    },
    error: {
        flex: '100%',
    },
})

type StyleProps = WithStyles<'container' | 'textField' | 'error'>

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

                            {this.renderError(formProps.submitErrors, classes.error)}

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

    private handleSignIn = (values: FormFields) =>
        this.props.signIn(values.login, values.password)
            .catch((err) => ({ FORM_ERROR: err.message as string }))

    private renderError = (errors: any, className: string) =>
        errors && errors.FORM_ERROR && (
            <Typography
                className={className}
                gutterBottom
                variant="caption"
                color="error"
            >
                {errors.FORM_ERROR}
            </Typography>
        )
}

export default withStyles(styles)(SignInWidget)

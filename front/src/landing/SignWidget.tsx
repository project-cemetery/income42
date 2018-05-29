import * as React from 'react'

import Button, { ButtonProps } from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Form } from 'react-final-form'

import TextField from '@income42/common/form/TextField'
import { required } from '@income42/utils/validators'

interface FormFields {
    login: string
    password: string
}

interface Props {
    signCallback: (login: string, password: string) => Promise<void>
    title: string

    // MUI Button
    action?: React.ReactElement<ButtonProps>
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
    action: {
        marginLeft: 'auto',
    },
})

type StyleProps = WithStyles<'container' | 'textField' | 'error' | 'action'>

class SignInWidget extends React.Component<Props & StyleProps, {}> {

    private initialValues = {
        login: '',
        password: '',
    } as FormFields

    public render() {

        const { classes, title, action } = this.props

        return (
            <Form
                onSubmit={this.handleSubmit}
                initialValues={this.initialValues}
            >
                {(formProps) => (
                    <Card component="form">
                        <CardContent className={classes.container}>

                            {this.renderError(formProps.submitErrors, classes.error)}

                            <TextField
                                name="login" label="Login"
                                className={classes.textField}
                                validate={required}
                            />

                            <TextField
                                name="password" label="Password"
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
                            >{title}</Button>

                            {action && React.cloneElement(
                                action,
                                { className: classes.action, size: 'small' },
                            )}
                        </CardActions>
                    </Card>
                )}
            </Form>
        )
    }

    private renderError = (errors: any, className: string) =>
        errors && errors.FORM_ERROR && (
            <Typography className={className} gutterBottom variant="caption" color="error">
                {errors.FORM_ERROR}
            </Typography>
        )

    private handleSubmit = (values: FormFields) =>
        this.props.signCallback(values.login, values.password)
            .catch((err) => ({ FORM_ERROR: err.message as string }))

}

export default withStyles(styles)(SignInWidget)

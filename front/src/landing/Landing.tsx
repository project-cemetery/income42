import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import Hero from './Hero'
import SignInWidget from './SignInWidget'

interface Props {
    signIn: (login: string, password: string) => Promise<void>
    signUp: (login: string, password: string) => void
}

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 5,
    },
})

type StyleProps = WithStyles<'root'>

class Landing extends React.Component<Props & StyleProps, {}> {

    public render() {

        const { classes } = this.props

        return (
            <div className={classes.root}>
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12}>
                        <Hero />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p>...</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SignInWidget signIn={this.props.signIn} />
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Landing)

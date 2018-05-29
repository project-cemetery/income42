import * as React from 'react'

const ReactCardFlip = require('react-card-flip')
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import SignWidget from './SignWidget'

interface Props {
    signIn: (login: string, password: string) => Promise<void>
    signUp: (login: string, password: string) => Promise<void>
}

interface LocalState {
    isFlipped: boolean
}

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '2rem',

        [theme.breakpoints.up('md')]: {
            paddingTop: '5rem',
        },
    },
})

type StyleProps = WithStyles<'root'>

class Landing extends React.Component<Props & StyleProps, LocalState> {

    public state = {
        isFlipped: false,
    }

    public render() {
        const { classes } = this.props

        return (
            <Grid
                container className={classes.root}
                justify="center"
            >
                <Grid item xs={11} sm={8} md={5} lg={4} xl={3}>
                    <ReactCardFlip isFlipped={this.state.isFlipped}>
                        <SignWidget
                            title={'Sign In'} key="front"
                            signCallback={this.props.signIn}
                            action={
                                <Button onClick={this.flip}>I have not account</Button>
                            }
                        />

                        <SignWidget
                            title={'Sign Up'} key="back"
                            signCallback={this.props.signUp}
                            action={
                                <Button onClick={this.flip}>I have account</Button>
                            }
                        />
                    </ReactCardFlip>
                </Grid>
            </Grid>
        )
    }

    private flip = () => this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))

}

export default withStyles(styles)(Landing)

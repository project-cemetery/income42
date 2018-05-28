import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => ({
    item: {
        marginTop: '10vh',
        width: '50vw',
    },

    [theme.breakpoints.down('sm')]: {
        item: {
            marginTop: '5vw',
            width: '90vw',
        },
    },
})

type StyleProps = WithStyles<'item'>

const Loading = ({ classes, ...props }: StyleProps) =>
    <Grid container alignContent="center" alignItems="center" justify="center">
        <Grid item className={classes.item}>
            <Card>
                <CardContent>
                    <Typography
                        variant="headline" component="h1"
                        gutterBottom
                    >income 42</Typography>

                    <LinearProgress />
                </CardContent>
            </Card>
        </Grid>
    </Grid>

export default withStyles(styles)(Loading as any)

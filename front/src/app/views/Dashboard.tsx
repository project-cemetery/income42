import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import YearDynamics from './widgets/YearDynamics'
import YearSources from './widgets/YearSources'

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
    },
})

type StyleProps = WithStyles<'root'>

const Dashboard = ({ classes, ...props }: StyleProps) =>
    <Grid container className={classes.root} spacing={24}>
        <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <YearDynamics />
                </Grid>
                <Grid item>
                    <YearSources />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
            <p>df</p>
        </Grid>
    </Grid>

export default withStyles(styles)(Dashboard)

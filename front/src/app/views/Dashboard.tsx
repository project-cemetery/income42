import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import YearDynamics from './widgets/YearDynamics'

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
            <YearDynamics />
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
            <p>df</p>
        </Grid>
    </Grid>

export default withStyles(styles)(Dashboard)

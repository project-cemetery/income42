import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as moment from 'moment'

import Dynamics from './widgets/Dynamics'
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
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <p>df</p>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <p>df</p>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography component="h2" variant="title">Yearly Report</Typography>
                </Grid>
                <Grid item>
                    <Dynamics data={yearDynamicsData} format={'YYYY MMMM'} />
                </Grid>
                <Grid item>
                    <YearSources />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

const yearDynamicsData = [
    {
        start: moment('May 01 2018'),
        end: moment('May 31 2018'),
        amount: 1509.4,
    },
    {
        start: moment('Apr 01 2018'),
        end: moment('Apt 30 2018'),
        amount: 1200,
    },
    {
        start: moment('Feb 01 2018'),
        end: moment('Feb 28 2018'),
        amount: 1205,
    },
]

export default withStyles(styles)(Dashboard)

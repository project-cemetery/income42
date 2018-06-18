import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as moment from 'moment'

import Dynamics from './widgets/Dynamics'
import Sources from './widgets/Sources'

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
                    <Sources data={yearSourcesData} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

const yearDynamicsData = [
    { start: moment('May 01 2018'), end: moment('May 31 2018'), amount: 1509.4 },
    { start: moment('Apr 01 2018'), end: moment('Apt 30 2018'), amount: 1200 },
    { start: moment('Feb 01 2018'), end: moment('Feb 28 2018'), amount: 1205 },
]

const yearSourcesData = [
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1700.9, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2500, source: 'Op' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1879, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2660, source: 'Something New' },
]

export default withStyles(styles)(Dashboard)

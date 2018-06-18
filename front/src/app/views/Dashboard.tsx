import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as moment from 'moment'

import Dynamics from './widgets/Dynamics'
import Sources from './widgets/Sources'
import Timeline from './widgets/Timeline'

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
    },
})

type StyleProps = WithStyles<'root'>

const Dashboard = ({ classes, ...props }: StyleProps) =>
    <Grid container className={classes.root} spacing={24}>
        <Grid item lg={4} md={7} sm={12} xs={12}>
            <p>df</p>
        </Grid>

        <Grid item lg={2} md={5} sm={12} xs={12}>
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography component="h2" variant="title">Timeline</Typography>
                </Grid>
                <Grid item>
                    <Timeline data={transactions} />
                </Grid>
            </Grid>
        </Grid>

        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography component="h2" variant="title">Yearly Report</Typography>
                </Grid>
                <Grid item>
                    <Dynamics data={yearDynamicsData} format={'YYYY MMMM'} groupedBy="month" />
                </Grid>
                <Grid item>
                    <Sources data={yearSourcesData} />
                </Grid>
            </Grid>
        </Grid>

        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography component="h2" variant="title">Life Report</Typography>
                </Grid>
                <Grid item>
                    <Dynamics data={lifeDynamicsData} format={'YYYY'} groupedBy="years" />
                </Grid>
                <Grid item>
                    <Sources data={lifeSourcesData} />
                </Grid>
            </Grid>
        </Grid>

        <Grid item xl={12}>
            <p>fdf</p>
        </Grid>
    </Grid>

const yearDynamicsData = [
    { start: moment('May 01 2018'), end: moment('May 31 2018'), amount: 1509.4 },
    { start: moment('Apr 01 2018'), end: moment('Apt 30 2018'), amount: 1200 },
    { start: moment('Feb 01 2018'), end: moment('Feb 28 2018'), amount: 1205 },
]

const lifeDynamicsData = [
    { start: moment('May 01 2016'), end: moment('May 31 2018'), amount: 150 },
    { start: moment('Apr 01 2017'), end: moment('Apt 30 2018'), amount: 700 },
    { start: moment('Feb 01 2018'), end: moment('Feb 28 2018'), amount: 1380 },
]

const yearSourcesData = [
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1700.9, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2500, source: 'Op' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1879, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2660, source: 'Something New' },
]

const lifeSourcesData = [
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1700.9, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2500, source: 'Op' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1879, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2660, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1700.9, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2500, source: 'Op' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 1879, source: 'Something New' },
    { start: moment('Jan 01 0001'), end: moment('Jun 18 2018'), amount: 2660, source: 'Something New' },
]

const transactions = [
    { amount: 12.4, source: 'Something New', createdAt: moment('Fri May 18 2018 21:45:26 GMT+0700 (+07)') },
    { amount: 12, source: 'Something New', createdAt: moment('Fri May 18 2018 21:45:26 GMT+0700 (+07)') },
    { amount: 12, source: 'Something New', createdAt: moment('Thu May 18 2017 21:45:26 GMT+0700 (+07)') },
]

export default withStyles(styles)(Dashboard)

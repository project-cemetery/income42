import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Line } from 'react-chartjs-2'

import Period from '@income42/model/Period'
import { formatMoney } from '@income42/utils/numbers'

interface OwnProps {
    data: Period[]
    format: string
    groupedBy: string
}

const styles = (theme: Theme) => ({
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
})

type Props = OwnProps & WithStyles<'title'>

class Dynamics extends React.Component<Props> {
    public render() {

        const { classes, format, groupedBy } = this.props

        const data = this.props.data
            .sort((a, b) => a.start.diff(b.start))

        return (
            <Card>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Income grouped by {groupedBy}
                    </Typography>

                    <Line
                        data={{
                            labels: data.map((ds) => ds.start.format(format)),
                            datasets: [{ data: data.map((ds) => ({ y: ds.amount })) }],
                        }}
                        options={{
                            layout: { padding: 0 },
                            scales: { yAxes: [{ ticks: { callback: formatMoney, min: 0 } }] },
                            legend: { display: false },
                            tooltips: {
                                mode: 'x',
                                callbacks: {
                                    label: (item: any) => formatMoney(item.yLabel),
                                },
                            },
                        }}
                    />
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Dynamics)

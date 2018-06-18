import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import * as moment from 'moment'
import { Line } from 'react-chartjs-2'

import { formatMoney } from '@income42/utils/numbers'

class YearDynamics extends React.Component {
    public render() {
        const data = [
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
        ].sort((a, b) => a.start.diff(b.start))

        return (
            <Card>
                <CardContent>
                    <Line
                        data={{
                            labels: data.map((ds) => ds.start.format('YYYY MMMM')),
                            datasets: [{ data: data.map((ds) => ({ y: ds.amount })) }],
                        }}
                        options={{
                            layout: { padding: 0 },
                            scales: { yAxes: [{ ticks: { callback: formatMoney, min: 0 } }] },
                            legend: { display: false },
                        }}
                    />
                </CardContent>
            </Card>
        )
    }
}

export default YearDynamics

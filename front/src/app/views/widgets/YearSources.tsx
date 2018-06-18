import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import * as moment from 'moment'
import { Pie } from 'react-chartjs-2'

class YearSources extends React.Component {
    public render() {
        const data = [
            {
                start: moment('Jan 01 0001'),
                end: moment('Jun 18 2018'),
                amount: 1700.9,
                source: 'Something New',
            },
            {
                start: moment('Jan 01 0001'),
                end: moment('Jun 18 2018'),
                amount: 2500,
                source: 'Op',
            },
            {
                start: moment('Jan 01 0001'),
                end: moment('Jun 18 2018'),
                amount: 1879,
                source: 'Something New',
            },
            {
                start: moment('Jan 01 0001'),
                end: moment('Jun 18 2018'),
                amount: 2660,
                source: 'Something New',
            },
        ]

        return (
            <Card>
                <CardContent>
                    <Pie
                        data={{
                            labels: data.map((ds) => ds.source),
                            datasets: [{ data: data.map((ds) => ds.amount) }],
                        }}
                        options={{
                            layout: { padding: 0 },
                            legend: { position: 'right' },
                            cutoutPercentage: 40,
                        }}
                    />
                </CardContent>
            </Card>
        )
    }
}

export default YearSources

import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Line } from 'react-chartjs-2'

import Period from '@income42/model/Period'
import { formatMoney } from '@income42/utils/numbers'

interface Props {
    data: Period[]
    format: string
}

class Dynamics extends React.Component<Props> {
    public render() {
        const data = this.props.data
            .sort((a, b) => a.start.diff(b.start))

        return (
            <Card>
                <CardContent>
                    <Line
                        data={{
                            labels: data.map((ds) => ds.start.format(this.props.format)),
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

export default Dynamics

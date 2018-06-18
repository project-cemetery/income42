import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Pie } from 'react-chartjs-2'

import { formatMoney } from '@income42/utils/numbers'

import Source from '@income42/model/Source'

interface Props {
    data: Source[]
}

class Sources extends React.Component<Props> {
    public render() {
        const { data } = this.props

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
                            tooltips: {
                                callbacks: {
                                    label: (item: any, chartData: any) =>
                                        `${chartData.labels[item.index]}:
                                            ${formatMoney(chartData.datasets[item.datasetIndex].data[item.index])}`,
                                },
                            },
                        }}
                    />
                </CardContent>
            </Card>
        )
    }
}

export default Sources

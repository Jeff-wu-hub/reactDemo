import React,{Component} from 'react'
import { Line } from '@ant-design/charts';
export default class LineCharts extends Component{
    constructor(props) {
        super(props);
        this.config.data = props.data
    }
    config = {
        data: {},
        xField: 'year',
        yField: 'value',
        label: {},
        point: {
            size: 3,
            shape: 'diamond',
            style: {
                fill: 'black',
                stroke: '#2a406a',
                lineWidth: 5,
            },
        },
        tooltip: { showMarkers: false },
        state: {
            active: {
                style: {
                    shadowColor: 'yellow',
                    shadowBlur: 4,
                    stroke: 'transparent',
                    fill: 'white',
                },
            },
        },
        theme: {
            geometries: {
                point: {
                    diamond: {
                        active: {
                            style: {
                                shadowColor: '#FCEBB9',
                                shadowBlur: 2,
                                stroke: '#F6BD16',
                            },
                        },
                    },
                },
            },
        },
        interactions: [{ type: 'marker-active' }],
    };
    render() {
        return (
            <Line {...this.config}/>
        )
    }
}

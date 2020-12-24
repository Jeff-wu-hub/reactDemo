import React ,{Component} from 'react'
import { Bar } from '@ant-design/charts'
export default class BarCharts extends Component{
    constructor(props) {
        super(props);
        this.config.data = props.data.reverse()
    }
    config = {
        data: [],
        autoFit:true,
        xField: 'values',
        yField: 'type',
        isRange: true,
        label: {
            position: 'middle',
            layout: [{ type: 'adjust-color' }],
        },
    }
    render() {
        return <Bar {...this.config}/>
    }
}

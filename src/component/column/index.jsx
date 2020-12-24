import React,{Component} from 'react'
import { Column } from '@ant-design/charts'
export default class ColumnCharts extends Component{
    constructor(props) {
        super(props);
        this.config.data = props.data
    }
    config = {
        data: {},
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
        seriesField: 'name',
        label: {
            position: 'middle',
            layout: [
                { type: 'interval-adjust-position' },
                { type: 'interval-hide-overlap' },
                { type: 'adjust-color' }
            ]
        }
    };
    render() {
        return <Column {...this.config}/>
    }
}

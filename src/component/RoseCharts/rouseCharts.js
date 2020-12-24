import { Rose } from '@ant-design/charts';
import {Component} from 'react'
export default class RouseCharts extends Component{
    constructor(props) {
        super(props);
        this.config.data = props.data
    }
    config = {
        data: {},
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        label: { offset: -15 },
    };

    render() {
        return (
            <Rose {...this.config}/>
        );
    }
}

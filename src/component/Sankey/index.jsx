import React from 'react'
import { Sankey } from '@ant-design/charts'
export default class SankeyCharts extends React.Component{
    constructor(props) {
        super(props);
        this.config.data = props.data
    }
    config = {
        data: [],
        sourceField: 'source',
        targetField: 'target',
        weightField: 'value',
        color: ['red', 'green', 'yellow'],
        edgeStyle: {
            fill: '#ccc',
            fillOpacity: 0.4,
        },
    };
    render() {
        return <Sankey {...this.config}/>
    }
}

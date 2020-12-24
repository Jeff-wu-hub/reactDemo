import './index.css'
import bg from './bg.jpg'
import linedata from '../../data/lineData'
import bardata from '../../data/bardata'
import rosedata from '../../data/rose'
import column from "../../data/column";
import sankey from "../../data/sankey";
import ColumnCharts from "../../component/column";
import SankeyCharts from "../../component/Sankey";
import RouseCharts from "../../component/RoseCharts/rouseCharts";
import LineCharts from '../../component/lineCharts'
import BarCharts from "../../component/barCharts";
import React,{Component} from 'react'
export default class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.componentDidMount()
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.tick()
        },500)
    }
    tick = function(){
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return(
            <div className={'infoBox'}>
                <img className={'layoutBg'} src={bg}/>
                <div className={'left'}>
                {/*    左侧*/}
                    <div className="Snuffbox">
                        <p className={'text'}>折线统计图</p>
                        <div className={'chartsBox'}><LineCharts data={linedata}/></div>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                    <div className="Snuffbox">
                        <p className={'text'}>Gantt</p>
                        <div className={'chartsBox'}><BarCharts data ={bardata}/></div>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                    <div className="Snuffbox">
                        <p className={'text'}>饼形图</p>
                        <div className={'chartsBox'}><RouseCharts data={rosedata}/></div>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                </div>
                <div className={'mid'}>
                {/*    中部*/}
                    <div className="midBox time">{this.state.date.toLocaleString()}</div>
                    <div className="midBox"><SankeyCharts data = {sankey}/></div>
                    <div className="midBox"><SankeyCharts data = {sankey}/></div>
                    <div className="midBox"><SankeyCharts data = {sankey}/></div>
                </div>
                <div className={'right'}>
                {/*    右侧*/}
                    <div className="Snuffbox">
                        <p className={'text'}>柱状图</p>
                        <div className={'chartsBox'}><ColumnCharts data={column}/></div>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                    <div className="Snuffbox">
                        <p className={'text'}>待定</p>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                    <div className="Snuffbox">
                        <p className={'text'}>待定</p>
                        <span className="re"/><span className="re"/><span className="re"/><span className="re"/>
                    </div>
                </div>
            </div>
        )
    }
}

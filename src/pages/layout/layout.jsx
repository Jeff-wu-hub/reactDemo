import React,{Component} from 'react'
import './index.css'
import {Route,Link} from "react-router-dom"
import bg from './../../assts/bg.jpg'
export default class LayoutMain extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
           <div className={'contentBox'}>
               <img src={bg} className={'backGround'}/>
               <div className={'layoutBox'}>
                   <div className={"box"}>
                       <Link to={'/Info'} style={{color:'white'}}>信息监控看板</Link>
                   </div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
                   <div className={"box"}>1</div>
               </div>
           </div>
        )
    }
}

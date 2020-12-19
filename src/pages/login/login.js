import './login.css'
import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';

export default class Login extends React.Component{
    click = function(){
        alert(1)
    }
    render() {
       return (
           <Button type={'primary'} onClick={this.click}>这是一个按钮</Button>
       )
    }
}

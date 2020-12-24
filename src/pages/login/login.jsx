import React, { Component } from 'react'
import './login.css'
import { Button,Input } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
const Admin = createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_2282999_s5k8w5x6psd.js'
})
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Login'
        }
    }
    login = function(){
        this.props.history.push('/layout')
    }
    render(){
        return (
            <div className={'contentMain'}>
                <div className={'form'}>
                    <span className={'Head'}>Login</span>
                    <div className={'inputForm'}>
                        <Input className='input'  size="large" placeholder="请输入用户名" bordered='false' prefix={<Admin type='icon-iconuser-copy'/>} />
                        <Input className='input'  size="large" placeholder="请输入密码" type='password' bordered='false' prefix={<Admin type='icon-password'/>} />
                        <div className={'btn'}><Button type='primary' block shape='round' size='large' onClick={this.login.bind(this)}>登录</Button></div>
                    </div>
                </div>
            </div>
        )
    }
}

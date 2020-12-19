import React ,{Component} from 'react'
import { Layout } from 'antd'
import {Route,Switch} from 'react-router-dom'
import Home from './../home/home'
import Category from './../category/category'
import Product from '../product/product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Role from '../role/role'
import User from '../user/user'
const { Header, Sider, Content } = Layout
export default class Admin extends Component{
    render() {
        return (
                <Layout style={{
                    width:'100%',
                    height:'100%'
                }}>
                    <Sider style={{
                        backgroundColor: 'red',
                        height:'100%',
                        width:'20%'
                    }}>这是侧边栏</Sider>
                    <Layout>
                        <Header style={{
                            color:'white'
                        }}>标头</Header>
                        <Content>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/category' component={Category}/>
                                    <Route path='/product' component={Product}/>
                                    <Route path='/role' component={Role} />
                                    <Route path='/user' component={User} />
                                    <Route path='/charts/bar' component={Bar} />
                                    <Route path='/charts/line' component={Line} />
                                    <Route path='/charts/pie' component={Pie} />
                                </Switch>
                        </Content>
                    </Layout>
                </Layout>
        )
    }
}

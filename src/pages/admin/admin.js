import React ,{Component} from 'react'
import { Layout } from 'antd'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Welcome from './../Content/welcome'
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
                            <BrowserRouter>
                                <Switch>
                                    <Route path='/welcome' component={Welcome}></Route>
                                </Switch>
                            </BrowserRouter>
                        </Content>
                    </Layout>
                </Layout>
        )
    }
}

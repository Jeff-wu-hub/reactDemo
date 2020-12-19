/*
* 应用根组件*/
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React from 'react'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
export default class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

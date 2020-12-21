import React, { Component } from 'react'
import Login from './pages/login/login'
import Layout from './pages/layout/layout'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/layout' component={Layout}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


import React, { Component } from 'react'
import Login from './pages/login/login'
import Layout from './pages/layout/layout'
import Info from './pages/Info'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route  exact path='/' component={Login}/>
                    <Route  path='/layout' component={Layout} />
                    <Route  path={'/Info'} component={Info}/>
                </Switch>
            </Router>
        )
    }
}


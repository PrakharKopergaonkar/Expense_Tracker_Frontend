import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Menu from './core/Menu'
import Home from './core/Home'
import Temp from './auth/temp'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/temp" component={Temp}/>
      </Switch>
    </div>)
}

export default MainRouter

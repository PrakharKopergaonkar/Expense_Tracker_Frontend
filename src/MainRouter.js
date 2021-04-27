import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Home from './core/Home'
import ExpenseOverview from './expense/ExpenseOverview'
import NewExpense from './expense/NewExpense'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/expense" component={ExpenseOverview}/>
        {/* <Route path="/temp" component={Temp}/> */}
        <PrivateRoute path="/expenses/new" component={NewExpense}/>
      </Switch>
    </div>)
}

export default MainRouter

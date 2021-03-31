import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './auth/Signin'

const MainRouter = () => {
    return (<div>
      {/* <Menu/> */}
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    </div>)
}

export default MainRouter

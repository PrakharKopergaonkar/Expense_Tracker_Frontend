import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/AddBoxRounded'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#69f0ae'}
  else
    return {color: '#ffffff'}
}
const isButtonActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#fffde7', backgroundColor: '#2bbd7e', marginRight:10}
  else
    return {color: '#2bbd7e', backgroundColor: '#ffffff', border:'1px solid #2bbd7e', marginRight:10}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        MERN Expense Tracker
      </Typography>
      <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon/>
          </IconButton>
        </Link>

        <div style={{position:'absolute',top:"5px", right: '10px'}}>
            <span style={{"float": 'right'}}>
                {/* { 
                    !auth.isAuthenticated() && (
                */}        
                <span>
                    <Link to="/signup">
                        <Button style={isActive(history, "/signup")}>Sign up
                        </Button>
                    </Link>
                    <Link to="/signin">
                        <Button style={isActive(history, "/signin")}>Sign In
                        </Button>
                    </Link>
                    </span>
                    {/* )
                } */}
            </span>
        </div>
      </div> 
    </Toolbar>
  </AppBar>
))

export default Menu

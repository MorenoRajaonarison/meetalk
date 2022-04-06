import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Loginpage from './authPages/LoginPage/LoginPage'
import Registerpage from './authPages/RegisterPage/RegisterPage'
import Dashboard from './Dashboard/Dashboard'

function App() {
  return <>
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Loginpage/>
        </Route>
        <Route exact path='/register'>
          <Registerpage/>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/'>
          <Redirect to='/dashboard'/>
        </Route>
      </Switch>
    </Router>
  </>
}

export default App;

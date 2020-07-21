import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import signupPage from './components/signup/signupPage'
import LoginPage from './components/login/loginPage'


export default(
    <div className="container">
        <Route exact path="/" component = {App}></Route> 
        <Route path="/signup" component = {signupPage}></Route> 
        <Route path="/login" component = {LoginPage}></Route>
    </div>
)
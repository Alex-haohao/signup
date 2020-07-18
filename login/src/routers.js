import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import signupPage from './components/signup/signupPage'


export default(
    <div className="container">
        <Route exact path="/" component = {App}></Route> 
        <Route path="/signup" component = {signupPage}></Route> 

    </div>
)
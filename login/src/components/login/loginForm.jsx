import React from "react"
import classnames from 'classnames'
import {login} from '../../actions/login'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username:"",
            password:"",
            error:{},
            isloading: false

        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e)=>{
        let errors =this.state.error
        e.preventDefault();
        this.setState({
            error:{},isloading:true
        })
        this.props.login(this.state).then((res)=>
            {
                this.props.history.push('/')
        },
        (error)=>{
            errors.form = "username or password is wrong, Please enter again"
            this.setState({
                error: errors,
                isloading:false
            })
        })


    }
    render(){

        const {error,username,password,isloading} = this.state
        return(
            <form  onSubmit={this.onSubmit}>
                <h1> Login Here</h1>
        {error.form && <div className="alert alert-danger">{error.form}</div>}

            <div className="form-group">
                <label className="control-label">UserName: </label>
                <input type="text" name="username" value={username}  
                onChange ={this.onChange}
                className="form-control"  ></input>
                
            </div>


            <div className="form-group">
                <label className="control-label">password: </label>
                <input type="password" name="password" value={password}  onChange ={this.onChange}
                className="form-control"></input>
               
            </div>


            <div className="form-group">
                 <button disabled={isloading} className="btn btn-primary btn-lg">signup</button>
            </div>
                
            </form>
        )
    }
    
}

export default withRouter(connect(null,{login})(LoginForm) )
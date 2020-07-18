import React from 'react'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'

class signupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            passwordConfirmation:"",
            error:{},
            isloading:false
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            isloading:true
        })
        this.props.signupAction.userSignupReq(this.state).then(
            ()=>{
                // add all data to redux
                this.props.flashAction.addFlashMessage({
                    type:"success",
                    text:"signup success Welcome!!!"
                })
                this.props.history.push('/')
            },
            ({response})=>{
                console.log(response.data)
                this.setState({
                    error:response.data,
                    isloading:false
                })
            }

            
        )
    }

render(){

    const {error,isloading} = this.state
    return(
        <form onSubmit={this.onSubmit}>
            <h1> Signup Here    Join Us</h1>

            <div className="form-group">
                <label className="control-label">UserName: </label>
                <input type="text" name="username" value={this.state.username}  onChange ={this.onChange}
                className={classnames("form-control",{'is-invalid':error.username})}  ></input>
                {error.username && <span className ="form-text text-muted">{error.username}</span>}
            </div>

            <div className="form-group">
                <label className="control-label">email: </label>
                <input type="email" name="email" value={this.state.email}  onChange ={this.onChange}
                className={classnames("form-control",{'is-invalid':error.email})}></input>
                {error.email && <span className ="form-text text-muted">{error.email}</span>}
            </div>

            <div className="form-group">
                <label className="control-label">password: </label>
                <input type="password" name="password" value={this.state.password}  onChange ={this.onChange}
                className={classnames("form-control",{'is-invalid':error.password})}></input>
                {error.password && <span className ="form-text text-muted">{error.password}</span>}
            </div>

            <div className="form-group">
                <label className="control-label">confirm password: </label>
                <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation}  onChange ={this.onChange}
                className={classnames("form-control",{'is-invalid':error.passwordConfirmation})}></input>
                {error.passwordConfirmation && <span className ="form-text text-muted">{error.passwordConfirmation}</span>}
            </div>

            <div className="form-group">
                 <button disabled={isloading} className="btn btn-primary btn-lg">signup</button>
            </div>
        </form>

    )
}


}

export default withRouter(signupForm)
import React from 'react'
import SignupForm from './signupForm.jsx'
import {connect} from 'react-redux'
import{bindActionCreators}  from 'redux'
import *  as signupAction from '../../actions/signupaction'
import *  as flashAction from '../../actions/flashMessage'

class signUpPage extends React.Component{

    render(){


        return(

            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm signupAction={this.props.signupAction}
                    flashAction = {this.props.flashAction}/>
                </div>
                <div className="col-md-3"></div>
            </div>

        )
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        signupAction:bindActionCreators(signupAction,dispatch),
        flashAction: bindActionCreators(flashAction,dispatch)

    }
}

export default connect(null,mapDispatchToProps)(signUpPage) ;
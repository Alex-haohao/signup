import React from 'react'
import{Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/login'

class NavigationBar extends React.Component{

    logout = (e) =>{
        e.preventDefault();
        this.props.logout();
    }

    render(){

        const {isAuthenticated} = this.props.auth

        const userLinks = (<ul className="navbar-nav mr-auto">
             <li className="nav-item">
                 <Link className="nav-link"  onClick={this.logout.bind(this)}>logout</Link>
             </li>
        </ul>)

        const guestLinks = (<ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" to="signup">signup</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="login">login</Link>
        </li>

    </ul>)

        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">HomePage</Link>
                   
                    <div className="collapse navbar-collapse" id="navbarExample05">
                        
                        {isAuthenticated ? userLinks :guestLinks}

                    </div>

                </div>
            </nav>
        )
    }

   
}

const mapStateToProps=(state)=>{
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logout})(NavigationBar)
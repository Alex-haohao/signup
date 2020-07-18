import React from 'react'
import{Link} from 'react-router-dom'

class NavigationBar extends React.Component{

    render(){


        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">HomePage</Link>
                   
                    <div className="collapse navbar-collapse" id="navbarExample05">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="signup">signup</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }

   
}

export default NavigationBar
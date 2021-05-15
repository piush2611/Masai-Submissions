import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../redux/action'


const Navbar = (props) => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand text-decoration-none">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            props.isLogin &&
                            <>
                                <li className="nav-item active">
                                    <Link to='/addEmployee' className="nav-link text-decoration-none"><button className="btn btn-danger">Add employee</button></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to='/login' className="nav-link text-decoration-none"><button className="btn btn-danger" onClick={props.logout}>Logout</button></Link>
                                </li>
                            </>
                        }
                        { !props.isLogin && 
                            <>
                                <li className="nav-item active">
                                    <Link to='/login' className="nav-link text-decoration-none"  ><button className="btn btn-danger">Login</button></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to='/register' className="nav-link text-decoration-none" ><button className="btn btn-danger" >Register</button></Link>
                                </li>
                            </> 
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin : state.isLogin
})

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

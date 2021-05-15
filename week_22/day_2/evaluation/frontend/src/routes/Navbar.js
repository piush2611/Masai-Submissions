import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from '../redux/action'

export class Navbar extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand " >Music Albums</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to='/login' onClick={this.handleClick} >Logout</Link>
                </li>
                </ul>
            </div>
        </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


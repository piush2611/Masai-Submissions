import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand font-weight-bolder">Meeting Room </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <div className="nav-link">{props.token}</div>
                        </li>
                        <li className="nav-item active">
                            <Link to='/orders' className="nav-link font-weight-bold">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger nav-link font-weight-bolder text-white" onClick={props.logout} >Logout</button>
                        </li>   
                    </ul>
                </div>
            </nav>
        </div>
    )
}

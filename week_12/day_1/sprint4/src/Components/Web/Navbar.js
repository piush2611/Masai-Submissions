import React from 'react'
import './Style.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Slack</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><small className="font-weight-bolder">Why slack?</small></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><small className="font-weight-bolder">Solutions</small></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link"><small className="font-weight-bolder">Resources</small></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link"><small className="font-weight-bolder">Enterprise</small></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link"><small className="font-weight-bolder">Pricing</small></a>
                    </li>
                </ul>
                <div className="ml-auto">
                <button className="btn text-white  px-4 py-1 purpleButton">Your workspace</button>
            </div>
            </div>
            
        </nav>
    )
}

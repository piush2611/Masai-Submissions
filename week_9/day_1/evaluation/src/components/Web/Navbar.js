import React, { Component } from 'react'

class NavItem extends React.Component{
    render() {
        return (
            <li className="nav-item">
                <a href="#" className="nav-link text-white">{this.props.name}</a>
            </li>
        )
    }
}

export class Navbar extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                        <a className="navbar-brand" href="#">Uber</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <NavItem name="Products" />
                                <NavItem name="Company" />
                                <NavItem name="Safety" />
                                <NavItem name="Help" />
                            </ul>
                            <ul className="navbar-nav">
                                <NavItem name="EN" />
                                <NavItem name="Log in" />
                                <button className="btn btn-light rounded-0">Sign up</button>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar

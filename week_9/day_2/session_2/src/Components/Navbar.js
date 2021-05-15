import React from 'react'
import { Link, Route } from 'react-router-dom'
import About from './About'
import Pricing from './Pricing'
import SignUp from './SignUp'
import Support from './Support'
import Products from './Products'
import Home from './Home'

export default function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/"><img src="https://zerodha.com/static/images/logo.svg" alt="" className="img-fluid w-25"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/About" className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Products" className="nav-link" >Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Pricing" className="nav-link" >Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Support" className="nav-link" >Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignUp" className="nav-link" >Sign Up</Link>
                    </li>
                    
                </ul>
            </div>  
        </nav>

        <Route exact path='/' component={Home} />
        <Route path="/About" component={ About } />
        <Route path="/Pricing" component={ Pricing } />
        <Route path="/Products" component={ Products } />
        <Route path="/Support" component={ Support } />
        <Route path="/SignUp" component={ SignUp } />
        
        </>
    )
}

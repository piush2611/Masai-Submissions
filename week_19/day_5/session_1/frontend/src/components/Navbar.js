import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ token }) {
    
    const handleClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/lists' className="navbar-brand text-decoration-none">Task  Manager</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            token
                                ?
                                <>
                                <li className="nav-item">
                                    <div className="nav-link"><button className="btn btn-primary text-white btn-sm" >Welcome, {localStorage.getItem('username')}</button></div>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-decoration-none" ><button className="btn btn-danger btn-sm" onClick={handleClick}>Sign Out</button></Link>
                                </li>
                                </>
                                :
                                <>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link text-decoration-none" ><button className="btn btn-danger btn-sm">Sign In</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signup' className="nav-link text-decoration-none" ><button className="btn btn-danger btn-sm">Sign Up</button></Link>
                                </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}



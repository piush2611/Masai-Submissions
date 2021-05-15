import { Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../Home'
import Login from './Login'
import Cart from './Cart'
import Menu from './Menu'
import AddNewRestaurant from './AddNewRestaurant'
import { connect } from 'react-redux'
import { logout } from '../Redux/Action'
import SignUp from './SignUp'
import Footer from '../Footer'
import Order from './Order'
import NewRestaurantRequests from './NewRestaurantRequests'

export class Routes extends Component {
    
    render() {
        return (
            <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-light">
                <Link className="navbar-brand text-dark" to="/">Food delivery</Link>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-dark text-light"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/cart">Cart</Link>
                        </li>
                        {
                            this.props.userType == "admin" ? 
                            (
                                <li className="nav-item active">
                                    <Link className="nav-link text-dark" to="/NewRestaurantRequests">Registrations</Link>
                                </li>
                            )
                            :
                            null
                        }
                        
                    </ul>
                </div>
                </nav>
                <Route path="/" exact component={ Home } />
                <Route path="/cart" component={ Cart } />
                <Route path="/login" component={ Login } />
                <Route path="/menu/:id" component={ Menu } />
                <Route path="/addNewRestaurant" component={ AddNewRestaurant } />
                <Route path="/signup" component={ SignUp } />
                <Route path="/order" component = { Order } />
                <Route path="/NewRestaurantRequests" component ={ NewRestaurantRequests } />
            </div>
            <div className=" mt-5">
                <Footer />
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.data,
  userType: state.userType
})

const mapDispatchToProps = dispatch => ({
    logout: (payload) => dispatch(logout(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

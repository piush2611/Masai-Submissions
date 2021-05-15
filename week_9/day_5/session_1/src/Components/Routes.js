import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import AllProducts from './AllProducts'
import Product from './Product'
import Home from './Home'
import Footer from './Footer'
import NotFound from './NotFound'
import Cart from './Cart'
import { productArr } from './Data'
import SignIn from './SignIn'
import ShoppingDone from './ShoppingDone'

export class Routes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
             cartData : [],
             total : 0
        }
    }

    // function add in cart
     add = (id, price) => {
        const filter = productArr.filter(e => e.id === id)
        const checkIfDataExists = this.state.cartData.find(e => e.id === id)
        checkIfDataExists ? alert("Product already in cart") : this.setState({
            cartData: [...this.state.cartData, filter[0]],
            total: this.state.total+price
        })
    }

    // function to increment quantity of product in cart
    inc = (id,price) => {
        this.setState({
            cartData: this.state.cartData.map(e => {
                    if(e.id === id)
                        e.count= e.count + 1
                    return e
            }),
            total: this.state.total+price
        })
    }

    // function to decrement quantity of product in cart
    dec = (id,price) => {
        this.setState({
            cartData: this.state.cartData.map(e => {
                    if(e.id === id)
                        e.count = e.count - 1
                    return e
            }),
            total: this.state.total-price
        })   
    }

    // if not logged in, redirected to login page
    redirectToLogin = (p) => {
        const location = {
            pathname: "/SignIn",
            state: this.setState({
                isLoggedIn: !this.state.isLoggedIn
            })
        }
        p.history.push(location)
    }

    // on successful login, redirected to products page
    changeLoginStatus = (p) => {
        alert("Logged in !! Now you can add to cart")
        const location = {
            pathname: "/Products/asc",
            state: ""
        }
        p.history.push(location)

    }
    
    render() {
        return (
            <>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943" alt="" className="img-fluid w-25"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/About" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/Products/asc" className="nav-link">Products</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/Faq" className="nav-link" >FAQ</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/Contact" className="nav-link" >Contact</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/cart" className="nav-link" ><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                                </li>
                            </ul>
                        </div>  
                    </nav>
                    
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/About" component={ About } />
                        <Route path="/Contact" component={ Contact } />
                        <Route path="/Products/:orderBy(asc|desc)" render={props => { return <AllProducts productArr={productArr} {...props} />}}/>
                        <Route path='/Products/:id' render = {props => <Product productArr={productArr} {...props} add={this.add} redirectToLogin={this.redirectToLogin} login={this.state.isLoggedIn} />} />
                        <Route path="/Faq" component={ Faq } />
                        <Route path="/cart" render = {() => <Cart data={this.state.cartData}  price={this.state.total} inc={this.inc} dec={this.dec} />} />
                        <Route path='/SignIn' render= {props => <SignIn login={this.changeLoginStatus} {...props} />} />
                        <Route path='/shoppingDone' component={ShoppingDone} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </>
        )
    }
}

export default Routes


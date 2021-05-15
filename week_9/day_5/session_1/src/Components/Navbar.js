import React from 'react'
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

export default function Navbar() {
    
    var cartData = []
    var total = 0
    const add = (id, price) => {
        const filter = productArr.filter(e => e.id === id)
        cartData.push(filter[0])
        total += price
    }

    const inc = id => {
        alert(id)
        cartData.map(e => {
            if(e.id === id)
                e.count= e.count + 1
            return e
        })
    }

    const dec = id => {
        alert(id)
        cartData.map(e => {
            if(e.id === id)
                e.count = e.count - 1
            return e
        })
    }

    
    return (
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
                            <Link to="/Products" className="nav-link">Products</Link>
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
                <Route exact path="/Products" render = {props => <AllProducts productArr={productArr} {...props} />}/>
                <Route path='/Products/:id' render = {props => <Product productArr={productArr} {...props} add={add} />} />
                <Route path="/Faq" component={ Faq } />
                <Route path="/cart" render = {() => <Cart data={cartData} dec={dec} inc={inc} price={total} />} />
                <Route path='/SignIn' component={SignIn} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    )
}


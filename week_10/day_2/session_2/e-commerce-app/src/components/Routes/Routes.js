import {  Route } from 'react-router-dom'
import AddProduct from './AddProduct'
import Cart from './Cart'
import Orders from './Orders'
import Home from '../Home'
import Login from './Login'
import React, { Component } from 'react'
import Update from './Update'
import UPIPayment from './UPIPayment'
import OrderPlaced from './OrderPlaced'
import CardPayment from './CardPayment'
import TotalOrdersPlaced from './TotalOrdersPlaced'

export class Routes extends Component {
    
    render() {
        return (
            <div>
                <Route path="/" exact component={ Home } />
                <Route path="/login" component= { Login } />
                <Route path="/addProduct" exact component={ AddProduct } />
                <Route path="/cart" component={ Cart } />
                <Route path="/order" component={ Orders } />
                <Route path="/addProduct/:id" component={ Update } />
                <Route path="/orderPlaced" component={ OrderPlaced } />
                <Route path="/cardPayment" component={ CardPayment } />
                <Route path="/upiPayment" component={ UPIPayment } />
                <Route path="/totalOrdersPlaced" component={ TotalOrdersPlaced } />
            </div>
        )
    }
}

export default Routes

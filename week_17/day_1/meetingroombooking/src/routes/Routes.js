import React, { Component } from 'react'
import {  Route, Switch } from 'react-router-dom'
import Home from './Home'
import  Login  from './Login'
import NotFound from './NotFound'
import BookingPage from './BookingPage'
import ConfirmationPage from './ConfirmationPage'
import Orders from './Orders'
import Register from './Register'
import CancelBooking  from './CancelBooking'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component = { Home } />
                    <Route path='/login' component = { Login } />
                    <Route path='/bookingPage/:id' component = {BookingPage } />
                    <Route path='/confirmationPage' exact component = { ConfirmationPage } /> 
                    <Route path='/orders' exact component = { Orders } />
                    <Route path='/register' component = { Register} />
                    <Route path='/cancelBooking/:id' component = { CancelBooking } />
                    <Route component = { NotFound } />
                </Switch>
            </div>
        )
    }
}

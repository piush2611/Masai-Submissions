import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from './SignUp'
import NotFound from './NotFound'
import Login from './Login'
import Home from './Home'

export default function Routes() {
    return (
        <div >
            
            <Switch>
                <Route path='/' exact component = { Home } />
                <Route path='/signup' exact component = { SignUp } />
                <Route path='/login' exact  component = { Login } />
                <Route component = { NotFound } />
            </Switch>
        </div>
    )
}

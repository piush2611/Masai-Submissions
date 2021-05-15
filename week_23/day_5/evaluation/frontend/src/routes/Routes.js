import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { AddEmployee } from './AddEmployee'
import NotFound from './NotFound'
import { Update } from './Update'

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/login' component = {Login} />
            <Route path='/register' component = {Register} />
            <Route path='/addEmployee' component = {AddEmployee} />
            <Route path='/update/:id' component = {Update} />
            <Route component ={ NotFound } />
        </Switch>
    )
}

export default Routes

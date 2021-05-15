import { Route } from 'react-router-dom'
import React from 'react'
import LandingPage from './LandingPage'
import Login from './Login'
import Table from '../Table'
import Topic from './Topic'
import NewTopic from './NewTopic'

export default function Routes() {
    return (
        <div>
            <Route path='/' exact component={ LandingPage } />
            <Route path='/login' component={ Login } />
            <Route path='/viewAll' exact component={ Table } />
            <Route path="/addNewTopic" component={ NewTopic } />
            <Route path="/viewAll/:id" component ={ Topic } />
            
        </div>
    )
}


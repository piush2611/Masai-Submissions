import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
import Update from './Update'
import { Route, Switch } from 'react-router-dom'
import Table from '../Table'
import Form from './Form'
import NotFound from './NotFound'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/addNew" component={Form} />
                <Route path="/viewAll" exact component={Table} />
                <Route path="/login" component={Login} />
                <Route path="/viewAll/:id" component={Update} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

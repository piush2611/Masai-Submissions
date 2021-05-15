import { Route } from 'react-router-dom'
import Registration from './Registration'


import React from 'react'

export default function Routes() {
    return (
        <div>
            <Route to="/" exact component={ Registration } />  
        </div>
    )
}

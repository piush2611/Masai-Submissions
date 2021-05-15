import { Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'
import AddArtist from './AddArtist'
import AddAlbum from './AddAlbum'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/addArtist' component={AddArtist} />
                <Route path='/addAlbum' component={AddAlbum} />
                <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

import React, { Component } from 'react'
import Form from './Form'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "admin",
             password: "admin",
             login: false
        }
    }
    
    check = (username, password) => {
        if(username=== this.state.username && password === this.state.password){
            this.setState({ login: true})
        }
    }

    render() {
        if(this.state.login)
            return ( <div className="text-center display-3">SIGN-IN SUCCESSFUL</div>)
        else
            return ( <Form check={this.check} /> )
    }
}

export default Login

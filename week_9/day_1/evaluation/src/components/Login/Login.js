import React, { Component } from 'react'
import Form from "./Form"

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [{username:"abc@gmail.com", password:"abc@123"}, {username:"def@gmail.com", password:"def@123"}]
        }
    }
    render() {
        return (
            <div>
                <Form data={this.state.data} />
            </div>
        )
    }
}

export default Login

import React, { Component } from 'react'

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div className="p-5 w-50">
                <h1>Sign in</h1>
                <div className="my-2">
                    Username: 
                    <input type="text" onChange={this.handleChange} name="username" className="form-control" />
                </div>
                <div className="my-2">
                    Password:
                    <input type="password" onChange={this.handleChange} name="password" className="form-control" />
                </div>
                <button className="my-2 btn btn-info" onClick={() => this.props.login(this.props)}>Sign in</button>
            </div>
        )
    }
}

export default SignIn


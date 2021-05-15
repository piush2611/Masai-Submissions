import React, { Component } from 'react'
import Form from './Form'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : "abcd@gmail.com",
             password : "abc@123",
             loginSuccessfull: false
        }
    }
    
    // function to check username and password
    check = (u, p) => {

        // checking against the data present in state
        if(u === this.state.username && p === this.state.password){
            this.setState({
                loginSuccessfull : true
            })
        }
    }
    render() {
        // if username and password are correct this will be displayed
        if(this.state.loginSuccessfull){
            return(
                    <div className="container">
                        <div className="text-center my-5 display-4 text-success">SIGN-IN SUCCESSFUL</div>
                    </div>
            )
        }
        else{
            return (
                <div className="container">
                    <Form submit={this.check} />
                </div>
            )
        }
    }
}

export default Login

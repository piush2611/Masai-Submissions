import React, { Component } from 'react'

var getStyle;
var hideIt = { display: "none" }

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            data : [
                {username: "abc@gmail.com", pass:"abc@123"}
            ]
        }
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    handleClick = () => {
        if(this.state.data[0].username == this.state.username && this.state.data[0].password == this.state.password){
            getStyle = {
                display:"none"
            }
        }

    }
    render() {
        
        return (
            <div className="container p-5" style={getStyle}>
                <h1>Sign in</h1>
                <label htmlFor="">Username or Email Address</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.username} name="username" />
                <div className="d-flex justify-content-between mt-2">
                    <label htmlFor="">Password</label>
                    <a href="#" className="text-primary">Forgot Password ?</a>  
                </div>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.password} name="password" />
                <div className="text-center">
                <   button className="btn btn-danger px-5 py-2 m-2" onClick={this.handleClick}>Sign in</button>
                </div>
                <p style={hideIt}>SIGN-IN SUCCESSFUL</p>
            </div>
        )
    }
}

export default Form

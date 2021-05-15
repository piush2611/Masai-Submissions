import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:"",
             mobile:"",
             flag:false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            flag : true
        })
    }

    handleSignup = () => {
        this.props.history.push("/login")
    }
    
    render() {
        return (
            <div className="container p-5 w-50">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control mb-1" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-1" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-1" required />
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control mb-2" required />
                { this.state.flag ? 
                <>
                    <input type="text" placeholder="Enter OTP sent on your number" className="form-control mb-2" required />
                    <button className="btn btn-block btn-outline-warning" onClick={this.handleSignup}>Sign up</button>
                </>
                :
                null
                }
                {
                    this.state.flag ? null : <button className="btn btn-block btn-outline-warning" onClick={this.handleClick}>Submit</button> 
                }
            </div>
        )
    }
}

export default SignUp

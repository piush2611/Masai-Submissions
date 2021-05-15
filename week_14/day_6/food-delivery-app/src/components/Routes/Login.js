import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginCheck } from '../Redux/Action'
import { Redirect }  from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             userType:""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        this.props.loginCheck(this.state.userType)
        this.props.history.push("/")
    }

    handleSignup = () => {
        this.props.history.push("/signup")
    }

    render() {
        if(this.props.login){
            return <Redirect to="/" />
        }
       else {
        return (
            <div className="container w-50 p-5">
                <h5 className="text-dark">New user ?</h5>
                <button className="btn btn-outline-info mb-2" onClick={this.handleSignup}>Sign Up</button>
                <br/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-2" />
                <select name="userType" onChange={this.handleChange} className="form-control mb-2">
                    <option value="..">..</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>                    
                </select>
                <button className="btn btn-block btn-warning" onClick={this.handleLogin}>Login</button>
            </div>
        )
       }
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps =  dispatch =>({
    loginCheck: (payload) => dispatch(loginCheck(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

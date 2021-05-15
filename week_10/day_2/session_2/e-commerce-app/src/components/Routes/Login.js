import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../Redux/Action'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             userType:".."
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        this.props.login(this.state.userType)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container p-5  w-50">
                <h3 className="text-dark font-weight bold">Login</h3>
                <label htmlFor="username" className="text-dark font-weight-bold">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control mb-2"  />
                <label htmlFor="password" className="text-dark font-weight-bold">Password</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="userType" className="text-dark font-weight-bold">Admin/User</label>
                <select name="userType" className="form-control mb-2" onChange={this.handleChange}>
                    <option value="..">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <button className="btn btn-outline-primary" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}



const mapDispatchToProps =  dispatch => ({
  login: (payload) => dispatch(login(payload))  
})

export default connect(null, mapDispatchToProps)(Login)

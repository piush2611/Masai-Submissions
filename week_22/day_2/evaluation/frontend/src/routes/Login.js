import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../redux/action'
import { Redirect, Link } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.username, this.state.password)
        let loginDetails = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.login(loginDetails)
    }
    
    render() {
        if(this.props.loginStatus){
            return  <Redirect to='/' />
        }
        else {
            return (
                <div className="container p-5" >
                    <div className="w-50 mx-auto">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} className="form-control mb-2"  />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} className="form-control mb-2"  />
                        <button className="btn btn-block btn-danger" onClick={this.handleClick} >Login</button>
                        <br/>
                        <small className="text-muted">If not a user, sign up now </small>
                        <br/>
                        <Link to='/register' className="text-decoration-none btn btn-sm btn-warning" >Sign Up</Link>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus : state.loginStatus,
    message : state.message
})

const mapDispatchToProps = dispatch => ({
    login : (payload) => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

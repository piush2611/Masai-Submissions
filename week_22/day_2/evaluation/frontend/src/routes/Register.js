import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newRegistration} from '../redux/action'
import { Link } from 'react-router-dom'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : '',
             email : '',
             message : this.props.message
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = () => {
        let newUserDetails ={
            username : this.state.username,
            password : this.state.password,
            email : this.state.email,
            admin : 0
        }
        this.props.newRegistration(newUserDetails)
        this.setState({
            username : '',
             password : '',
             email : ''
        })
    }
    
    render() {
        return (
            <div className="container p-5" >
                <h2 className="font-weight-bold">Sign Up</h2>
                <div className="w-50">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} className="form-control mb-2"  />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email} className="form-control mb-2"  />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} className="form-control mb-2"  />
                    <button className="btn btn-block btn-danger" onClick={this.handleClick} >Sign Up</button>
                    <Link to='/login' className="text-decoration-none" >Login</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    message : state.message
})

const mapDispatchToProps = dispatch => ({
    newRegistration : (payload) =>  dispatch(newRegistration(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLogin } from '../Redux/Action'
import { Redirect } from 'react-router-dom'
import {Container, Button, TextField, Typography } from '@material-ui/core';
import Styles from './Styles.module.css'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        if(this.state.username == "admin" && this.state.password == "admin"){
            this.props.checkLogin()
        }
        else {
            alert("Invalid login details !")
        }
    }
    
    render() {
        if(this.props.login){
            return <Redirect to='/' />
        }
        else {
            return (
                <div className={Styles.center}>
                <Container maxWidth="sm">
                    <Typography variant="h4">Login</Typography>
                    <TextField  required 
                                id="standard-required" 
                                label="Username"  
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange} />
                    <br/>
                    <TextField  required 
                                id="standard-password-input" 
                                label="Password" 
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <Button onClick={this.handleClick} color="secondary" variant="contained">Login</Button>
                </Container>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    checkLogin: (payload) => dispatch(checkLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

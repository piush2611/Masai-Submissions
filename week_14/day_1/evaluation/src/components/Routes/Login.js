import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLogin } from '../Redux/Action'
import { TextField, Button, Typography } from '@material-ui/core';


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        if (this.state.username == "admin" && this.state.password == "admin") {
            this.props.checkLogin()
            this.props.history.push({ pathname: "/" })
        }
        else {
            alert("Username/ password are invalid")
        }
    }

    render() {
        return (
            <div style={{ padding: "100px", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom style={{ textAlign: "center" }} >Login page</Typography>
                <TextField id="standard-basic" label="Username" name="username" onChange={this.handleChange} value={this.state.username} />
                <br />
                <TextField id="standard-basic" label="Password" name="password" onChange={this.handleChange} value={this.state.password} />
                <br />
                <Button color="secondary" variant="outlined" onClick={this.handleClick} className="my-2">Login</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    checkLogin: () => dispatch(checkLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

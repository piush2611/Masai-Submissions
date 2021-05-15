import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: ""
        }
    }

    // function to handle change in input tags
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // to prevent default behaviour of submit
    submit = (event) => {
        event.preventDefault()
    } 
    render() {
        return (
            <div className="mx-auto m-5 w-25">
                <h2 className="font-weight-bolder">Sign in</h2>
                <form onSubmit={this.submit}>
                    <label htmlFor="username" className="text-dark font-weight-bolder">Username or Email address</label>
                    <input  type="text"
                            placeholder="Username" 
                            value={this.state.username}
                            onChange={this.handleChange}
                            name="username"
                            className="form-control mb-2" />
                    <label htmlFor="password" className="text-dark font-weight-bolder">Password</label>
                    <input  type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            className="form-control mb-2" />
                    <button className="btn btn-info btn-block" onClick={this.props.submit.bind(this, this.state.username, this.state.password)}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Form

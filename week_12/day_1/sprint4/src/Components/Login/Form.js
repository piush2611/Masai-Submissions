import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        return (
                <div className="w-50 mx-auto">
                    <h1 className="font-weight-bolder text-primary ">Sign in</h1>
                    <label htmlFor="username">Username or email</label>
                    <input type="text" className="form-control" onChange={this.handleChange} name="username" placeholder="Username/ email" />
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" />
                    <button className="btn btn-info btn-block my-2" onClick={() => this.props.check(this.state.username, this.state.password)}>Submit</button>
                </div>
        )
    }
}

export default Form

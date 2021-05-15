import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email : '',
             password : '',
             flag : false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let user = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        }

        axios.post(`http://127.0.0.1:5000/auth/signup`, user)
             .then(res => {
                alert(res.data)
                this.setState({ flag : true})
             })
             .catch(err => console.log(err))

    }
    
    render() {
        return (
            <div className="container p-5 w-50 bg-light">
                {
                    this.state.flag ?
                    <Link to='/login' className="text-decoration-none text-dark"><button className="btn btn-block m-2 btn-info">Go to login page</button></Link> :
                    null
                }
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} className="form-control mb-2" onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} className="form-control mb-2" onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-3" required />
                    <button className="btn btn-block btn-info" onClick={this.handleClick}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersData } from '../Redux/Actions'

export class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:"",
             username:"",
             mobile:0,
             description:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let data = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            username:this.state.username,
            mobile:this.state.mobile,
            description:this.state.description
        }

        this.props.getUsersData(data)
    }
    
    render() {
        return (
            <>
            <div className="container p-5">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  value={this.state.name} onChange={this.handleChange} className="form-control my-1" required  />
                <br/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control my-1" required />
                <br/>    
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control my-1" required />
                <br/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control my-1" required />
                <br/>
                <label htmlFor="mob">Mobile</label>
                <input type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control my-1" required />
                <br/>
                <label htmlFor="desc">Description</label>
                <br/>
                <input  type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} required />
                <br/>
                <button className="btn btn-info my-1" onClick={this.handleClick}>Submit</button>
            </div>
            <div>{this.props.response}</div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    response: state.response  
})

const mapDispatchToProps = dispatch => ({
    getUsersData: (payload) => dispatch(getUsersData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

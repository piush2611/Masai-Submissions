import React, { Component } from 'react'
import Options from '../CreateOptions'
import axios from 'axios'

export class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            email: "",
            mobile: "",
            age: ""
        }
    }

    componentDidMount() {
        console.log(this.props.data)
        let id = Number(this.props.match.params.id)
        let data = this.props.data.filter(e => e.id == id)
        console.log(data[0])
        console.log(data[0].id)
        this.setState({
            id: data[0]['id'],
            name: data[0]['name'],
            email: data[0]['email'],
            mobile: data[0]['mobile'],
            age: data[0]['age']
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let id = this.props.match.params.id
        let data = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            age: this.state.age
        }
        axios.put(`http://127.0.0.1:5000/users/edit/${id}`, data)
            .then(res => {
                alert(res.data)
                this.props.func()
            })
            .catch(error => console.log(error))

    }


    render() {
        return (
            <div className="container p-5 w-50">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="age">Age</label>
                <select name="age" onChange={this.handleChange} value={this.state.age} className="form-control mb-2">
                    <Options len={55} />
                </select>
                <button className="btn btn-block btn-outline-info" onClick={this.handleClick}>Update</button>
            </div>
        )
    }
}

export default Edit

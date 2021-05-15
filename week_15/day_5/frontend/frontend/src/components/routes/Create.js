import React, { Component } from 'react'
import Options from '../CreateOptions'
import axios from 'axios'

export class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            email: "",
            mobile: "",
            age: "",
            previousId: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let idNum = Number(this.state.previousId) + 1
        let data = {
            id: idNum,
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            age: this.state.age
        }
        axios.post('http://127.0.0.1:5000/users/create', data)
            .then(res => {
                alert(res.data)
                this.props.func()
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let len = this.props.data.length
        let data = this.props.data

        let id = data[len - 1] ? data[len - 1]['id'] : 0
        this.setState({ previousId: id })
    }


    render() {
        return (
            <div className="container p-5 w-50">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control mb-2" placeholder="Firstname Lastname" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-2" placeholder="abc@gmail.com" />
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control mb-2" placeholder="9876543210" />
                <label htmlFor="age">Age</label>
                <select name="age" onChange={this.handleChange} value={this.state.age} className="form-control mb-2" placeholder="29" >
                    
                    <Options len={55} />
                </select>
                <button className="btn btn-block btn-outline-info" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Create

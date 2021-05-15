import React, { Component } from 'react'
import axios from 'axios'

export class Show extends Component {
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
        let id = this.props.match.params.id
        axios.get(`http://127.0.0.1:5000/users/show/${id}`)
            .then(res => {
                const data = res.data[0]
                this.setState({
                    id: data['id'],
                    name: data['name'],
                    email: data['email'],
                    mobile: data['mobile'],
                    age: data['age']
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='container p-5'>
                <div> Id : {this.state.id}</div>
                <div>Name : {this.state.name}</div>
                <div>Email : {this.state.email}</div>
                <div>Mobile : {this.state.mobile}</div>
                <div>Age : {this.state.age}</div>
            </div>
        )
    }
}

export default Show

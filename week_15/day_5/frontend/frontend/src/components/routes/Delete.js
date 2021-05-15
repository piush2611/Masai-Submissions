import React, { Component } from 'react'
import axios from 'axios'

export class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        console.log(this.props.data)
        let id = Number(this.props.match.params.id)
        let data = this.props.data.filter(e => e.id == id)
        console.log(data)
        console.log(data[0])
        this.setState({
            name: data[0]['name']
        })
    }

    handleClick = () => {
        let id = this.props.match.params.id
        axios.delete(`http://127.0.0.1:5000/users/delete/${id}`)
            .then(res => {
                this.props.func();
                this.setState({
                    name : res.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container p-5">
                <h3 className="text-dark">Name : {this.state.name}</h3>
                <button className="btn btn-outline-danger" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default Delete

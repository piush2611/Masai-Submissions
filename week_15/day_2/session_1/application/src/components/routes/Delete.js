import React, { Component } from 'react'
import axios from 'axios'

export class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            qty: "",
            show: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        const data = this.props.data[id]
        this.setState({
            name: data['item'],
            qty: data['quantity']
        })
        console.log(data)
    }

    handleClick = () => {
        let id = this.props.match.params.id
        const data = {
            itemNo: id
        }
        axios.post(`http://127.0.0.1:5000/delete`, data)
            .then(res => {
                alert(res.data);
                this.props.history.push('/')
            })
            .catch(error => console.log(error))
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className='container'>
                {this.state.show ? (
                    <div className="bg-light w-50 p-3 text-center m-5">
                        <h3 className="text-dark mb-2">Are you sure you want to delete ?</h3>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-outline-danger btn-lg" onClick={this.handleClick}>Yes</button>
                            <button className="btn btn-outline-danger btn-lg " onClick={this.handleShow}>No</button>
                        </div>
                    </div>
                )
                    :
                    null
                }
                <table className="table table-responsive m-5">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.name}</td>
                            <td>{this.state.qty}</td>
                            <td><button className="btn btn-danger" onClick={this.handleShow}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Delete
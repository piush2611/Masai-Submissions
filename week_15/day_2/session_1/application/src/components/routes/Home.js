import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import Delete from './Delete'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/listing')
            .then(res => {
                const dataFromApi = res.data.data;
                this.setState({ data: dataFromApi })
            })
    }
    render() {
        return (
            <div className="container p-5 ">
                <div className="p-3">
                    <button className="btn btn-outline-primary bg-light "> <Link to='/add'>Add new</Link></button>
                </div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Edit</td>
                            <td>Delete</td>
                            <td>Purchase</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((e, index) =>
                            <tr key={e.item}>
                                <td>{e.item}</td>
                                <td>{e.quantity}</td>
                                <td><Link to={`/change/${index}`} >Edit</Link></td>
                                <td><Link to={`/delete/${index}`} >Delete</Link></td>
                                <td><Link to={`/mark/${index}`} >Purchase</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home

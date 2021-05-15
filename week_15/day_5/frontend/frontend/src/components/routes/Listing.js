import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../Pagination'

export class Listing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/users/listing`)
            .then(res => {
                this.setState({ data: res.data.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container p-5">
                <button className="btn btn-lg btn-light m-3"><Link to='/users/create'>Add new user</Link></button>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td>Age</td>
                            <td>Delete</td>
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(e =>
                            <tr key={e.id}>
                                <td><Link to={`/users/show/${e.id}`}>{e.id}</Link></td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.age}</td>
                                <td><button className="btn btn-outline-danger"><Link to={`/users/delete/${e.id}`} className="text-dark" >Delete</Link></button></td>
                                <td><button className="btn btn-outline-info"><Link to={`/users/edit/${e.id}`}>Edit</Link></button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Listing

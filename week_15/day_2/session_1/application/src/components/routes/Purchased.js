import React, { Component } from 'react'
import axios from 'axios'

export class Purchased extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/purchased')
            .then(res => {
                const dataFromAPI = res.data
                this.setState({
                    data: dataFromAPI
                })
            })
    }

    render() {
        return (
            <div className="container p-5">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(e =>
                            <tr key={e.item}>
                                <td>{e.item}</td>
                                <td>{e.quantity}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Purchased

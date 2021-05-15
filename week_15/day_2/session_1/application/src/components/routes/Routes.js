import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Mark from './Mark'
import Edit from './Edit'
import Delete from './Delete'
import Add from './Add'
import axios from 'axios'
import Purchased from './Purchased'

export class Routes extends Component {
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

    handleClick = () => {
        axios.get('http://127.0.0.1:5000/listing')
            .then(res => {
                const dataFromApi = res.data.data;
                this.setState({ data: dataFromApi })
            })
    }


    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to='/'>Grocery App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/done">Purchased</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path='/' exact component={Home} />
                <Route path='/add' render={ props => <Add getData={this.handleClick} {...props} />} />
                <Route path='/delete/:id' render={ props => <Delete data={this.state.data}  {...props} />} />
                <Route path='/change/:id' render={ props => <Edit data={this.state.data} {...props} />} />
                <Route path='/mark/:id' render={ props => <Mark data={this.state.data} {...props} />} />
                <Route path='/done' component={Purchased} />
            </div>
        )
    }
}

export default Routes

import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Delete from './Delete'
import Edit from './Edit'
import Create from './Create'
import Show from './Show'
import Listing from './Listing'
import axios from 'axios'

export class Routes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : []
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/users/listing')
             .then(res => {
                 console.log(res.data.data)
                 this.setState({ data: res.data.data })
             })
             .catch(error => console.log(error))
    }

    getUpdatedData = () => {
        axios.get(`http://127.0.0.1:5000/users/listing`)
             .then(res => {
                 this.setState({ data: res.data.data })
             })
             .catch(error => console.log(error))
    }


    render() {
        return (
            <div className='container p-5'>
                <button className="btn btn-primary"><Link to='/' className="text-dark">Homepage</Link></button>
                <Switch>
                    <Route path='/' exact  render = { props => <Listing data={this.state.data} {...props} /> } />
                    <Route path='/users/edit/:id' render = { props => <Edit data={this.state.data} func={this.getUpdatedData} {...props} /> } />
                    <Route path='/users/create' render = { props => <Create data={this.state.data} func={this.getUpdatedData} {...props} /> }  />
                    <Route path='/users/show/:id' component = { Show } />
                    <Route path='/users/delete/:id' render = { props => <Delete data={this.state.data} func={this.getUpdatedData} {...props} /> }  />
                </Switch>
            </div>
        )
    }
}

export default Routes

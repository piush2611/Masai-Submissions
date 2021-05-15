import React, { Component } from 'react'
import axios from 'axios'

export class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            item: "",
            qty: ""
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        const data = this.props.data[id]
        this.setState({
            item: data['item'],
            qty: data['quantity']
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleClick = (e) => {
        e.preventDefault()
        let id = this.props.match.params.id
        const data = {
            "item" : this.state.item,
            "quantity" : this.state.qty
        }

        axios.post(`http://127.0.0.1:5000/edit/${id}`, data)
             .then( res => {
                 alert(res.data);
                this.props.history.push('/')}
              )
             .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='container p-5 w-50'>
                <form action="">
                    <label htmlFor="item">Product Name</label>
                    <input type="text" name="item" onChange={this.handleChange} value={this.state.item} className="form-control mb-2" />
                    <label htmlFor="qty">Quantity</label>
                    <select name="qty" value={this.state.qty} onChange={this.handleChange} className="form-control mb-2" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button className="btn btn-block btn-outline-info" onClick={this.handleClick}>Update</button>
                </form>                
            </div>
        )
    }
}

export default Edit

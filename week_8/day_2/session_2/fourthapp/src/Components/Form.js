import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item: ""
        }
    }
    handleChange = (event) => {
        this.setState({ item: event.target.value })
    }
    render() {
        return (
            <div className="d-flex my-2">
                <input type="text" value={this.state.item} onChange={this.handleChange} className="form-control" placeholder="Add a new to-do" />
                <button onClick={() => this.props.handleAdd(this.state.item)} className="btn btn-success">Add</button>
            </div>
        )
    }
}

export default Form

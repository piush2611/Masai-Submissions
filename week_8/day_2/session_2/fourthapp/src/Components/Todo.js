import React, { Component } from 'react'

export class Todo extends Component {
    styleTodo = () => {
        return {
            textDecoration : this.props.e.completed ? "line-through" : "none",
            color : this.props.e.completed ? "green" : "black"
        }
    }
    
    render() {
        
        return (
            <div className="d-flex justify-content-between m-1">
                <h4 onClick={this.props.handleClick.bind(this, this.props.e.id)} style={this.styleTodo()}>{this.props.e.title}</h4>
                <button onClick={this.props.delete.bind(this, this.props.e.id)} className="btn btn-danger" >Delete</button>
            </div>
            
        )
    }
}

export default Todo

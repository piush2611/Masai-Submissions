import React, { Component } from 'react'
import Form from './Components/Form'
import Todo from './Components/Todo'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoDb : [],
       completed: []
    }
  }
  
  handleAdd = (item) => {
    const toDo = {
      title : item,
      completed : false,
      id : Math.random(1,100)*10
    }
    this.setState({
      todoDb : [...this.state.todoDb, toDo]
    })
  }

  handleClick = (id) => {
    this.setState({
      todoDb : this.state.todoDb.map(e => {
        if(e.id === id){
          e.completed = !e.completed
        }
        return e
      })
    })
  }

  delete = (id) => {
    this.setState({
      todoDb: this.state.todoDb.filter(e => e.id !== id)
    })
  }

  showCompleted = () => {
    this.setState({
      completed : this.state.todoDb.filter(e => e.completed === true)
    })
  }

  render() {
    return (
      <div className="container p-5 w-50 rounded border border-dark mt-5">
        <h1 className="text-center font-weight-bolder">To-Do-App</h1>
        <Form  handleAdd={this.handleAdd} />
        {this.state.todoDb.map(e => <Todo key={e.id} e={e} handleClick={this.handleClick} delete={this.delete} />)}
        <button className="btn btn-info text-center btn-sm" onClick={this.showCompleted}>Show completed todo's</button>
        <div className="">
          {this.state.completed.map(e => <h5 key={e.id} className="m-1">{e.title}</h5>)}
        </div>
      </div>
    )
  }
}

export default App


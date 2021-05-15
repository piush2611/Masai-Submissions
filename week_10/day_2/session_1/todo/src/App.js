import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewToDo, toggle, delToDO, count } from './components/redux/Action'
import Total from './components/Total'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       new: ""
    }
  }

  handleClick = () => {
    let newTodo = {
      title: this.state.new,
      completed: false,
      id:Math.floor(Math.random(1,10000)*100)
    }
    this.props.addNewToDo(newTodo)
    this.props.count()
  }

  handleChange = (e) => {
    this.setState({new: e.target.value})
  }

  handleToggle = (id) => {
    this.props.toggle(Number(id))
    this.props.count()
  }

  handleDel = (id) => {
    this.props.delToDO(id)
    this.props.count()
  }
  
  render() {
    return (
      <div className="container p-5 text-center w-25">
        <h3>To-Do-App</h3>
        <div className="d-flex justify-content-center my-2">
          <input type="text" value={this.state.new} onChange={this.handleChange} className="form-control" placeholder="Add new-to-do" />
          <button onClick={this.handleClick} className="btn btn-outline-warning">Add</button>
        </div>

        <div className="p-2">
          {console.log(this.props.todo)}
          {this.props.todo.map(item => 
            <div className="d-flex justify-content-between my-1 " key={item.id}>           
              <div onClick={() =>this.handleToggle(item.id)} className="text-dark" style={{ textDecoration: item.completed ? "line-through" : "none" }} >{item.title}</div>
              <button onClick={() => this.handleDel(item.id)} className={item.completed ? "btn btn-outline-danger btn-sm" : "btn btn-danger btn-sm" }>Delete</button>
            </div>
            )}
        </div>
        <Total />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  addNewToDo: (payload) => dispatch(addNewToDo(payload)),
  toggle: (payload) => dispatch(toggle(payload)),
  delToDO: (payload) => dispatch(delToDO(payload)),
  count: (payload) => dispatch(count(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

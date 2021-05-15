import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
export class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: '',
            tasks: [],
            taskToBeUpdated: '',
            id: 0,
            newTask: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        Axios({
            method: 'post',
            baseURL: 'http://127.0.0.1:5000/task/read',
            data: { listId: id }
        })
            .then(res => {
                this.setState({
                    tasks: res.data.tasks
                })
            })
            .catch(err => console.log(err))
    }

    //  function to delete task
    handleDelete = (id) => {
        let token = localStorage.getItem('token')
        Axios({
            'method': 'delete',
            baseURL: `http://127.0.0.1:5000/task/delete/${id}`,
            headers: { Authorization: "Bearer " + token }
        })
            .then(res => {
                this.componentDidMount()
            })
            .catch(err => console.log(err))
    }

    // function to get data for task to be edited
    handleEdit = (id) => {
        Axios({
            'method': 'get',
            baseURL: `http://127.0.0.1:5000/task/read/${id}`
        })
            .then(res => {
                this.setState({
                    taskToBeUpdated: res.data.task[0].task,
                    id: id
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // function to update the task as per user's updation
    handleUpdate = () => {
        Axios({
            method: 'put',
            baseURL: `http://127.0.0.1:5000/task/update/${this.state.id}`,
            data: { task: this.state.taskToBeUpdated },
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        })
            .then(res => {
                console.log(res)
                this.componentDidMount()
            })
            .catch(err => console.log(err))
    }

    // funciton to add new task 
    addNewTask = () => {
        Axios({
            method: 'post',
            baseURL: `http://127.0.0.1:5000/task/create`,
            headers: { Authorization: "Bearer " + localStorage.getItem('token') },
            data: {
                listId: this.props.match.params.id,
                task: this.state.newTask
            }
        })
            .then(res => {
                console.log(res)
                this.componentDidMount()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="container">
                <Navbar token={localStorage.getItem('token')} />
                {/* modal for adding new task */}
                <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#exampleModalCenter">Add task</button>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Add a new task to your list</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="text" id="newTask" placeholder="Write your task ..." value={this.state.newTask} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">CLOSE</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addNewTask}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        this.state.tasks && this.state.tasks.map(task =>
                            <div className="col-12 col-md-3" key={task.id}>
                                <div className="card border-primary  m-2 "  >
                                    <div className="card-header">{task.task}</div>
                                    <div className="card-body text-primary">
                                        <button className="btn btn-danger btn-sm mr-2" onClick={() => this.handleDelete(task.id)}>Delete</button>

                                        {/* modal for updation of task */}
                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => this.handleEdit(task.id)}>Edit</button>
                                        <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalScrollableTitle">Update task</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <input type="text" id="taskToBeUpdated" value={this.state.taskToBeUpdated} onChange={this.handleChange} className="form-control" />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleUpdate}>Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}


export default Task

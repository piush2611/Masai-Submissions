import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export class CreateList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskArr: [],
            listName: "",
            task: "",
            newTask: "",
            msg: "",
            flag: false
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleTaskDelete = task => {
        this.setState({
            taskArr: this.state.taskArr.filter(t => t != task)
        });
    };

    addNewTask = () => {
        if (this.state.taskArr.length == 0) {
            this.setState({
                taskArr: [...this.state.taskArr, this.state.task]
            });
        } else {
            this.setState({
                taskArr: [...this.state.taskArr, this.state.newTask],
                newTask: ""
            });
        }
    };

    handleSubmit = e => {
        let token = localStorage.getItem("token");

        e.preventDefault();
        axios({
            method: "post",
            baseURL: "http://127.0.0.1:5000/list/create",
            headers: { Authorization: "Bearer " + token },
            data: {
                taskArr: [...this.state.taskArr],
                listname: this.state.listName
            }
        }).then(res => {
            this.setState({
                msg: res.data.message,
                taskArr: [],
                listName: "",
                flag: true
            });
        });
    };

    render() {
        if (!this.state.flag) {
            return (
                <div className="container">
                    <Navbar token={localStorage.getItem("token")} />
                    <div className="row justify-content-around p-5">
                        <div className="col-12 col-md-4">
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="listName" className="font-weight-bold">
                                    List-name
                                </label>
                                <input
                                    type="text"
                                    id="listName"
                                    value={this.state.listName}
                                    onChange={this.handleChange}
                                    className="form-control mb-2"
                                />

                                {this.state.taskArr.length > 0 ? null : (
                                    <>
                                        <label htmlFor="task" className="font-weight-bold">
                                            Task
                                        </label>
                                        <input
                                            type="text"
                                            id="task"
                                            value={this.state.task}
                                            onChange={this.handleChange}
                                            className="form-control mb-2"
                                        />
                                        <button
                                            className="btn btn-block btn-info"
                                            onClick={this.addNewTask}
                                        >
                                            Add task
                                        </button>
                                    </>
                                )}

                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-block btn-danger"
                                />
                            </form>
                        </div>
                        <div className="col-12 col-md-4">
                            {this.state.taskArr.length > 0 ? (
                                <>
                                    <div className="font-weight-bold mb-2">Add another task</div>
                                    <input
                                        type="text"
                                        id="newTask"
                                        value={this.state.newTask}
                                        onChange={this.handleChange}
                                        className="form-control my-1"
                                    />
                                    <button
                                        className="btn btn-block btn-info"
                                        onClick={this.addNewTask}
                                    >
                                        Add task
                                    </button>
                                </>
                            ) : null}
                        </div>
                        <div className="col-12 col-md-3">
                            {this.state.taskArr.length > 0 ? (
                                <>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className="font-weight-bold"> Task-name</td>
                                                <td />
                                                <td />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.taskArr &&
                                                this.state.taskArr.map(task => (
                                                    <tr key={task}>
                                                        <td>{task}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => this.handleTaskDelete(task)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <>
                    <Navbar token={localStorage.getItem("token")} />
                    <div className="my-2 font-weight-bold text-center">{this.state.msg}</div>
                </>
            )
        }
    }
}

export default CreateList;

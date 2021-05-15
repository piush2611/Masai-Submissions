import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    axios({
      method: "get",
      baseURL: "http://127.0.0.1:5000/list/read",
      headers: { Authorization: "Bearer " + token }
    }).then(res => {
      this.setState({
        lists: res.data.lists
      });
      console.log(res.data);
    });
  }

  handleDelete = id => {
    let token = localStorage.getItem("token");
    alert(id);
    axios({
      method: "delete",
      baseURL: `http://127.0.0.1:5000/list/delete/${id}`,
      headers: { Authorization: "Bearer " + token }
    }).then(res => this.componentDidMount());
  };

  handleEdit = id => {
    this.props.getList(id);
  };

  render() {
    return (
      <div className="container bg-light-gray">
        <Navbar token={localStorage.getItem("token")} />
        <div className="p-5">
          <Link to="/create">
            <button className="btn btn-info">Create list</button>
          </Link>
          {this.state.lists.length > 0 ? (
            <div className="row">
              {this.state.lists &&
                this.state.lists.map(list => (
                  <div className="col-12 col-md-3" key={list.listId}>
                    <div className="card my-2  bg-light ">
                      <div className="card-header">{list.listname}</div>
                      <div className="card-body">
                        <h5 className="card-title">Tasks : {list.task}</h5>
                        <Link
                          to={`/task/${list.listId}`}
                          className="text-decoration-none"
                        >
                          <h5 className="card-title">View tasks</h5>
                        </Link>
                        <p className="card-text">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.handleDelete(list.listId)}
                          >
                            Delete
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center my-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs8DvMv1bKGVCAi2ls8M4ZDiHKFZrdV_NcL2IK4VfAv6pTcKpC"
                alt=""
                className=""
              />
              <div className="mt-4 font-weight-bold h5">
                Currently you don't have any list, create your first now
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Lists;

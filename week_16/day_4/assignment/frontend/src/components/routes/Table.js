import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/users/listing").then(res => {
      const dataFromApi = res.data;
      console.log(res);
      this.setState({
        data: dataFromApi
      });
    });
  }

  render() {
    return (
      <div className="container p-3">
        <table className="table table-responsive">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Mobile</td>
              <td>Email</td>
              <td>Edit</td>
              <td>Delete</td>
              <td>Show Addresses</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button
                      className="btn btn-info text-dark"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/delete/${user.id}`}>
                    <button
                      className="btn btn-danger text-dark"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/addresses/${user.id}`}>
                    <button className="btn btn-info text-dark">
                      Show Addresses
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

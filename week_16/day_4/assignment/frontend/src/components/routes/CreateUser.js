import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      email: "",
      next: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    let data = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email
    };
    axios
      .post(`http://127.0.0.1:5000/user/create`, data)
      .then(res => alert(res.data))
      .then(res => this.setState({ next: true }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container m-5 w-50">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          name="mobile"
          value={this.state.mobile}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control mb-2"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button
          type="submit"
          className="btn btn-block btn-outline-warning mb-2"
          onClick={this.handleClick}
        >
          Submit
        </button>

        {this.state.next ? (
          <Link to="/addresses">
            <button className="btn btn-block btn-outline-success">Next</button>
          </Link>
        ) : null}
      </div>
    );
  }
}

export default CreateUser;

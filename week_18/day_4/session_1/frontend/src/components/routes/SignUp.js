import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message : ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    if (
      this.state.username == "" ||
      this.state.email == "" ||
      this.state.password == ""
    ) {
      alert("Please fill in details");
    } else {
      axios
        .post(`http://127.0.0.1:5000/user/create`, user)
        .then(res => {
          alert(res.data.message);
          this.setState({
            message : res.data.message + "you can login now",
            username: "",
            password: "",
            email: ""
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="mx-auto p-5 w-50 mt-1 bg-light">
          <form>
            <label>username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              className="form-control mb-2"
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="form-control mb-2"
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control mb-3"
              required
            />
            <button
              className="btn btn-block btn-success"
              onClick={this.handleClick}
            >
              Sign Up
            </button>
          </form>
        <div className="text-info">{this.state.message}</div>
      </div>
    );
  }
}

export default SignUp;

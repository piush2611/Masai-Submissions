import React, { Component } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      msg: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let signUpDetails = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };

    Axios({
      method: "post",
      baseURL: "http://127.0.0.1:5000/user/register",
      data: signUpDetails
    }).then(res => {
      this.setState({
        msg: res.data.message + " You can sign in now"
      });
    });

    this.setState({
      email: "",
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="p-5 w-50 mx-auto">
          <h2 className="font-weight-bold">Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="mb-2 form-control"
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="mb-2 form-control"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="mb-2 form-control"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-block btn-danger my-1"
            />
          </form>
          <div className="font-weight-bold">{this.state.msg}</div>
        </div>
      </div>
    );
  }
}

export default SignUp;

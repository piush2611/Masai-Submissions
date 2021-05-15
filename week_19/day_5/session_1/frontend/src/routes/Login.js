import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let loginDetails = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://127.0.0.1:5000/user/login", loginDetails)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('username', res.data.username)
        this.props.history.push("/lists");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="p-5 w-50 mx-auto">
          <h2 className="font-weight-bold">Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control mb-2"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control mb-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-block my-1 btn-danger"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

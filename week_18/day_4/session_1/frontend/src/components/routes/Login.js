import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let loginData = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`http://127.0.0.1:5000/user/login`, loginData)
      .then(res => {
        if (res.data.error) {
          alert(res.data.message);
        } else {
          this.setState({
            token: res.data.token
          });

          let token = JSON.stringify(this.state.token);
          localStorage.setItem("token", token);
          this.props.login();
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  getToken = () => {
    let getToken = localStorage.getItem("token");
    alert(JSON.parse(getToken));
  };

  render() {
    return (
      <div className="mx-auto p-5 w-50 bg-light my-2">
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="form-control mb-2"
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
          <button className="btn btn-block btn-info" onClick={this.handleClick}>
            Login
          </button>
          <div className="m-2 text-dark">Not a user, sign up now</div>
          <Link to="/signup" className="text-decoration-none">
            <button className="btn btn-sm btn-success">Sign Up</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;

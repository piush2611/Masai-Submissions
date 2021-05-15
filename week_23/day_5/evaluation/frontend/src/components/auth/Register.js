import React, { Component } from "react";
import { connect } from "react-redux";
import { registration } from '../../redux/action'
import Navbar from '../Navbar'

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    let { username, email, password } = this.state;
    this.props.registration({ username, email, password})
  };

  render() {
    return (
      <>
      <Navbar />
      <div className="container mx-auto w-50 p-5">
          <h1 className="my-2'">Registration </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={this.state.email}
              className="form-control"
              id="email"
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={this.state.username}
              className="form-control"
              id="username"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        { this.props.error && <div className="text-danger my-2">{this.props.msg}</div>}
        { !this.props.error && <div className="text-success my-2">{this.props.msg}</div> }
      </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
    isLogin : state.isLogin,
    error : state.error,
    msg : state.msg
});

const mapDispatchToProps = dispatch => ({
  registration : (payload) => dispatch(registration(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

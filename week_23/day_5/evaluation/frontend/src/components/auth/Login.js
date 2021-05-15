import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from '../../redux/action'
import Navbar from '../Navbar'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
    let { username, password } = this.state;
    this.props.login({username, password})
  };

  render() {
      if( !this.props.isLogin){
    return (
      <>
      <Navbar />
      <div className="container mx-auto w-50 p-5">
          <h1 className="my-2" >Login</h1>
        <form onSubmit={this.handleSubmit}>
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
      </div>
      </>
    );
}
else{
  return <Redirect to='/' />
}
  }
}

const mapStateToProps = state => ({
    isLogin : state.isLogin,
    error : state.error,
    msg : state.msg
});

const mapDispatchToProps = dispatch => ({
  login : (payload) => dispatch(login(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

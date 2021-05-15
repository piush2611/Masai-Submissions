import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export class CreateAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      line1: "",
      line2: "",
      city: "",
      pincode: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    let data = {
      userId: this.state.userId,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      pincode: this.state.pincode
    };
    axios
      .post(`http://127.0.0.1:5000/user/addresses/create`, data)
      .then(res => alert(res.data))
  };

  render() {
    return (
      <div className="container m-5 w-50">
        <br/>
        <label htmlFor="userId">User-Id</label>
        <input
          type="text"
          name="userId"
          value={this.state.userId}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="line1">Address line 1</label>
        <input
          type="text"
          name="line1"
          value={this.state.line1}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="line2">Address line 2</label>
        <input
          type="text"
          name="line2"
          value={this.state.line2}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={this.state.pincode}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <button
          className="btn btn-block btn-warning"
          onClick={this.handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CreateAddress;

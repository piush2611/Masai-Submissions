import React, { Component } from "react";
import axios from "axios";

export class AddressDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstLine1: "",
      firstLine2: "",
      firstCity: "",
      firstPincode: "",
      secondLine1: "",
      secondLine2: "",
      secondCity: "",
      secondPincode: ""
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
      firstLine1: this.state.firstLine1,
      firstLine2: this.state.firstLine2,
      firstCity: this.state.firstCity,
      firstPincode: this.state.firstPincode,
      secondLine1: this.state.secondLine1,
      secondLine2: this.state.secondLine2,
      secondCity: this.state.secondCity,
      secondPincode: this.state.secondPincode
    };

    axios
      .post(`http://127.0.0.1:5000/user/addresses/create`, data)
      .then(res => alert(res.data))
      .then(res => this.props.history.push("/table"))
      .catch(error => console.log(error))
    
  };

  render() {
    return (
      <div className="container p-5 w-50">
        <h3 className="text-dark">Address - 1</h3>
        <label htmlFor="userId">User-id</label>
        <input
          type="text"
          name="userId"
          value={this.state.userId}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="firstLine1">Address line 1 </label>
        <input
          type="text"
          name="firstLine1"
          value={this.state.firstLine1}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="firstLine2">Address line 2</label>
        <input
          type="text"
          name="firstLine2"
          value={this.state.firstLine2}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="firstCity"
          value={this.state.firstCity}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="pincode" />
        <input
          type="number"
          name="firstPincode"
          value={this.state.firstPincode}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <h3 className="text-dark">Address - 2</h3>
        <label htmlFor="secondLine1">Address line 1 </label>
        <input
          type="text"
          name="secondLine1"
          value={this.state.secondLine1}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="secondLine2">Address line 2</label>
        <input
          type="text"
          name="secondLine2"
          value={this.state.secondLine2}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="secondCity"
          value={this.state.secondCity}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <label htmlFor="pincode" />
        <input
          type="number"
          name="secondPincode"
          value={this.state.secondPincode}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <button
          type="submit"
          className="btn btn-block btn-outline-warning"
          onClick={this.handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddressDetails;

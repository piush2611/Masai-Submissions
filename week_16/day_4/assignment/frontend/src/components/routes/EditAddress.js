import React, { Component } from "react";
import axios from "axios";

export class EditAddress extends Component {
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

  componentDidMount() {
    let id = Number(this.props.match.params.id);
    axios.get('http://127.0.0.1:5000/addresses/listing')
         .then(res => {
          const address = res.data.filter(add => add.id == id);
          this.setState({
            userId: address[0]["userId"],
            line1: address[0]["line1"],
            line2: address[0]["line2"],
            city: address[0]["city"],
            pincode: address[0]["pincode"]
          });
         })
         .catch(error => console.log(error))
    
    
  }

  handleClick = () => {
    let data = {
      userId: this.state.userId,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      pincode: this.state.pincode
    };
    let id = Number(this.props.match.params.id);
    axios
      .put(`http://127.0.0.1:5000/user/addresses/${this.state.userId}/edit/` + id, data)
      .then(res => alert(res.data))
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div className="container m-5 w-50">
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
          Update
        </button>
      </div>
    );
  }
}

export default EditAddress;

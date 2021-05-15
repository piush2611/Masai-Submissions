import React, { Component } from "react";
import axios from "axios";

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    let id = Number(this.props.match.params.id);
    axios.get('http://127.0.0.1:5000/users/listing')
         .then(res => {
          const user = res.data.filter(u => u.id == id)
          this.setState({
            name: user[0]["name"],
            mobile: user[0]["mobile"],
            email: user[0]["email"]
          });
         })
         .catch(error => console.log(error))
    
    
  }

  handleClick = () => {
    let data = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email
    };
    let id = Number(this.props.match.params.id);
    axios
      .put(`http://127.0.0.1:5000/user/edit/` + id, data)
      .then(res => alert(res.data))
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
          type="tel"
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
          Update
        </button>
      </div>
    );
  }
}

export default CreateUser;

import React, { Component } from "react";
import axios from "axios";

export class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      email: "",
      show: false
    };
  }

  componentDidMount() {
    let id = Number(this.props.match.params.id);
    axios.get('http://127.0.0.1:5000/users/listing')
        .then( res => {
          const user = res.data.filter(user => user.id == id)
          this.setState({
            name: user[0]["name"],
            mobile: user[0]["mobile"],
            email: user[0]["email"]
          });
        })  
    
  }

  confirmDelete = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleClick = () => {
    const id = Number(this.props.match.params.id);
    axios
      .delete(`http://127.0.0.1:5000/user/delete/` + id)
      .then(res => alert(res.data))
      .then(res => this.props.history.push("/table"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container p-5">
        {this.state.show ? (
          <div className="m-2 bg-light">
            <h3 className="text-dark">
              Are you sure ? All your addresses will be deleted too{" "}
            </h3>
            <div className="d-flex justify-content-around">
              <button className="btn btn-info" onClick={this.confirmDelete}>
                No
              </button>
              <button className="btn btn-danger" onClick={this.handleClick}>
                Yes
              </button>
            </div>
          </div>
        ) : null}
        <div className="m-2 p-2">
          <div>Name : {this.state.name}</div>
          <div>Mobile : {this.state.mobile}</div>
          <div>Email : {this.state.email}</div>
          <button className="btn btn-danger" onClick={this.confirmDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteUser;

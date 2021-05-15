import React, { Component } from "react";
import axios from "axios";

export class DeleteAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      line1: "",
      line2: "",
      city: "",
      pincode: "",
      show: false
    };
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    axios.get('http://127.0.0.1:5000/addresses/listing')
         .then(res => { 
           const address = res.data.filter(add => add.id == id)
           this.setState({
            line1: address[0]["line1"],
            line2: address[0]["line2"],
            city: address[0]["city"],
            pincode: address[0]["pincode"]
          });
          })
    
  }

  confirmDelete = () => {
    this.setState({
      show: true
    });
  };

  handleClick = () => {
    const id = Number(this.props.match.params.id);
    axios
      .delete(`http://127.0.0.1:5000/user/addresses/${this.state.userId}/delete/` + id)
      .then(res => alert(res.data))
      .then(res => this.props.history.push("/table"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container p-5">
        {this.state.show ? (
          <div className="m-2 bg-light">
            <h3 className="text-dark">Are you sure you want to delete it ?</h3>
            <div className="d-flex justify-content-between">
              <button className="btn btn-info">No</button>
              <button className="btn btn-danger" onClick={this.handleClick}>
                Yes
              </button>
            </div>
          </div>
        ) : null}
        <div className="m-2 p-2">
          <div>User-Id : {this.state.userId}</div>
          <div>Address line 1 : {this.state.line1}</div>
          <div>Address line 2 : {this.state.line2}</div>
          <div>City : {this.state.city}</div>
          <div>Pincode : {this.state.pincode}</div>
          <button className="btn btn-danger" onClick={this.confirmDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteAddress;

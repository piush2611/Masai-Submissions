import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class AddressesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let id = Number(this.props.match.params.id);
    axios
      .get(`http://127.0.0.1:5000/user/${id}/addresses/listing`)
      .then(res => {
        const dataFromApi = res.data;
        this.setState({
          data: dataFromApi
        });
      });
  }

  render() {
    return (
      <div className="container p-5">
        <Link to="/createAddress">
            <button className="btn btn-lg btn-light m-2">
              Add new address
            </button>
          </Link>
        <table className="table table-responsive">
          <thead>
            <tr>
              <td>Id</td>
              <td>Address</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((address, index) => (
              <tr key={address.id}>
                <td>{index + 1}</td>
                <td>
                  Address line 1 : {address.line1} <br />
                  Address line 2 : {address.line2} <br />
                  City : {address.city} <br />
                  Pincode : {address.pincode}
                </td>
                <td>
                  <Link to={`/addresses/${address.userId}/edit/${address.id}`}>
                    <button
                      className="btn btn-info text-dark"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/addresses/${address.userId}/delete/${address.id}`}>
                    <button
                      className="btn btn-danger text-dark"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddressesTable;

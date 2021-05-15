import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="container p-3">
        <div className="display-4 text-dark text-center my-3">
          User Addresses Manager
        </div>
        <div className="row w-50">
          <div className="col-12 col-md-4">
            <Link to="/table">
              <button className="btn btn-lg btn-outline-danger">
                Show Data
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/create">
              <button className="btn btn-lg btn-outline-danger">
                Create new
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CreateAddress from "./CreateAddress";
import CreateUser from "./CreateUser";
import DeleteAddress from "./DeleteAddress";
import DeleteUser from "./DeleteUser";
import EditAddress from "./EditAddress";
import EditUser from "./EditUser";
import AddressDetails from "./AddressDetails";
import Home from "./Home";
import UserTable from "./Table";
import AddressesTable from "./AddressesTable";

export class Routes extends Component {;
  render() {
    return (
      <div className="container p-5">
        <div className="display-4 text-dark text-center my-3">
          User Addresses Manager
        </div>
        <div className="d-flex">
          <Link to='/table'><button className="btn btn-lg btn-light ml-2">Show table</button></Link>
          <Link to="/create">
              <button className="btn btn-lg btn-light ml-2">
                Create new user
              </button>
            </Link>
        </div>
        <Route
          path="/table"
          component={ UserTable }
        />
        <Route
          path="/create"
          component = { CreateUser }
        />
        <Route path="/create-address" component={ CreateAddress } />
        <Route
          path="/delete/:id"
          component = { DeleteUser }
        />
        <Route
          path="/addresses/:userid/delete/:id"
          component={ DeleteAddress }
        />
        <Route
          path="/edit/:id" exact
          component={ EditUser } 
        />
        <Route
          path="/addresses/:userid/edit/:id"
          component={ EditAddress }
        />
        <Route path="/addresses" exact component={AddressDetails} />
        <Route
          path="/addresses/:id" exact
          component={ AddressesTable }
        />
      </div>
    );
  }
}

export default Routes;

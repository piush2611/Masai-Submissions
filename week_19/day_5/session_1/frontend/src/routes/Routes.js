import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Lists from "./Lists";
import Login from "./Login";
import SignUp from "./SignUp";
import Task from "./Task";
import Home from "./Home";
import NotFound from "./NotFound";
import CreateList from "./CreateList";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lists" component={Lists} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/task/:id" component={Task} />
          <Route path="/create" component={CreateList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;

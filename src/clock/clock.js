import React from "react";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import { Link, Switch, Route } from "react-router-dom";
import "./style.css";

const Clock = () => {
  return (
    <div>
      <Link to="/home">
        <div className="container2">
          <div className="container">
            <h1 className="hover">Punch Log</h1>
            <p>Lvl.9</p>
          </div>
        </div>
      </Link>

      <div className="app-content">
        <Switch>
          <Route exact={true} path="/clock" component={UserList} />
          <Route exact={true} path="/clock/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default Clock;

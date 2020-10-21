import React from "react";
import "./Header.css";
import Feed from "./Feed";
import BottomHeader from "./BottomHeader";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Login from "./Login.js";
import clock from "./clock/clock";
import HomeView from "./HomeView";
import Contact from './messeges/Contact'
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Messeges from './messeges/Messeges'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";

function App() {
   const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!auth.currentUser ? (
          <Login />
        ) : (
          <>
            <Header />
            <BottomHeader />

            <span className="app__body">
              <Switch>
                <Route exact={true} path="/" component={HomeView} />
                <Route exact={true} path="/clock" component={clock} />
                <Route exact={true} path="/contact" component={Contact} />
                <Route exact={true} path="/messeges" component={Messeges} />
                <Redirect to="/" />
              </Switch>
            </span>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

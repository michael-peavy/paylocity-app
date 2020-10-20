import React from "react";
import BottomHeader from "./BottomHeader";
import "./App.css";
import Header from "./Header.js";
import Login from "./Login.js";
import clock from "./Clock/Clock";
import HomeView from "./HomeView";
import Contact from "./Messeges/Contact";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Messeges from "./Messeges/Messeges";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  React.useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: currentUser || false,
      });
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {user === false ? (
          <Login />
        ) : user ? (
          <>
            <Header />
            <BottomHeader />
            <span className="app__body">
              <Switch>
                <Route exact={true} path="/" component={HomeView} />
                <Route path="/clock" component={clock} />
                <Route path="/contact" component={Contact} />
                <Route path="/messeges" component={Messeges} />
                <Redirect to="/" />
              </Switch>
            </span>
          </>
        ) : (
          <></>
        )}
      </Router>
    </div>
  );
}

export default App;

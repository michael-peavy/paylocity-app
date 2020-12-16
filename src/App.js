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
import PayCheck from './paycheck/PayCheck'
import HomeView from "./HomeView";
import Contact from './messeges/Contact'
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Messeges from './messeges/Messeges'
import Hr from './hr/Hr'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
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
                <Route path="/paycheck" component={PayCheck} />
                <Route path="/menu" component={Hr} />

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

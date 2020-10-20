import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MessageIcon from '@material-ui/icons/Message';
import DateRangeIcon from '@material-ui/icons/DateRange';
import "./bottomHeader.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
  Link,
} from "react-router-dom";

class BottomHeader extends React.Component {
  render() {
    return (
      <div className="d-none1">
        <ul className="ul">
          <div className="row" style={{ textDecoration: "none" }}>
            <div className="header__center">

<Link to ='/'>
              <div
                className="header__option
        header__option--active"
              >
                <HomeIcon fontSize="large" />
              </div>
              </Link>



              <Link to="/clock">
                <div className="header__option">
                  <FlagIcon fontSize="large" />
                </div>
              </Link>


              <Link to='/contact'>
              <div className="header__option">
                <MessageIcon fontSize="large" />
              </div>
              </Link>

              <div className="header__option">
                <DateRangeIcon fontSize="large" />
              </div>

              <div className="header__option">
                <ReorderIcon fontSize="large" />
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default BottomHeader;

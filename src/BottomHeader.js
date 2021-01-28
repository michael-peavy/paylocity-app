import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import MessageIcon from "@material-ui/icons/Message";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "./bottomHeader.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

class BottomHeader extends React.Component {
  render() {
    return (
      <div className="d-none1">
        <ul className="ul">
          <div className="row" style={{ textDecoration: "none" }}>
            <div className="header__center">
              <Link to="/">
                <div
                  className="header__option1
        header__option--active"
                >
                  <HomeIcon fontSize="large" />
                </div>
              </Link>

              <Link to="/clock">
                <div className="header__option1">
                  <FlagIcon fontSize="large" />
                </div>
              </Link>

              
                <div className="header__option1">
                  <MessageIcon fontSize="large" />
                </div>
              

             
              <div className="header__option1">
                <DateRangeIcon fontSize="large" />
              </div>
                       
              <div className="header__option1">
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

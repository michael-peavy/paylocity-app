import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {auth} from './firebase'
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
  const [{ user }] = useStateValue();


const signOut = ()  =>  {
  auth.signOut()

}


  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img
            src="https://www.strategichrus.com/wp-content/uploads/2018/09/Paylocity-new-logo.png"
            alt="paylocity-logo"
          />

          <div className="header__input">
            <SearchIcon />
            <input className="width" placeholder="Search" type="text" />
          </div>
        </div>
      </Link>

      <div className="d-none2">
        <div className="header__center">
          <div
            className="header__option
        header__option--active"
          >
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar style={{marginLeft:'50px'}} src={user.photoURL} />
          <h4 style={{marginRight:'30px'}}>{user.displayName}</h4>
        </div>

       


      
        
        { user && <ExitToAppIcon fontSize='large' style={{marginTop:'7px', cursor:'pointer'}} onClick={() => auth.signOut()}>Logout!</ExitToAppIcon> }

      </div>
    </div>
  );
}

export default Header;

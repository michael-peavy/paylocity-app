import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useRadioGroup } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
  Link,
} from "react-router-dom";


function Sidebar() {
const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">

          <div className='d-none4'>
          <SidebarRow src={user.photoURL} 
          title={user.displayName}/>
          
          <SidebarRow Icon={LocalHospitalIcon} title='Emergency Support'/>


        <Link to='/clock'>
         <SidebarRow Icon={EmojiFlagsIcon} title="Punch in"/>
         </Link>
         <SidebarRow Icon={PeopleIcon} title="Contacts"/>
         <SidebarRow Icon={ChatIcon} title="Messeges"/>
         <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="More"/> 
        </div>
        </div>
    );
}

export default Sidebar;
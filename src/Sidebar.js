import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <div className="d-none4">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} title="Emergency Support" />
       
        <Link to="/clock">
          <SidebarRow Icon={EmojiFlagsIcon} title="Punch in" />
        </Link>

          
        <a href='https://tok.mikepeavy.vercel.app/'>

        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        </a>

         <Link to=''>
        <SidebarRow Icon={PeopleIcon} title="Contacts" />
        </Link>

         <Link to=''>
        <SidebarRow Icon={ChatIcon} title="Messages" />
        </Link>
         
    


        <SidebarRow Icon={ExpandMoreIcon} title="More" />
      </div>
    </div>
  );
}

export default Sidebar;

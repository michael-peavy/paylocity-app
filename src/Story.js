import "./story.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className='move'>
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className='story__avatar' src={profileSrc} />
      <h4>{title}</h4>
    </div>
    </div>
  );
}

export default Story;

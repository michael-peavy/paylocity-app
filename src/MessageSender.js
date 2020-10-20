import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db, { getServerTimestamp } from "./firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: getServerTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: ImageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`Care to share ${user.displayName}?`}
            type="text"
          />

          <input
            value={ImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Opional:image URL here"
            type="text"
          />

          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

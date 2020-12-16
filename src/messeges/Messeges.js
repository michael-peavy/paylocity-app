import React, { useEffect, useState } from "react";
import "./messeges.css";
import Message00 from "./Message00";

const Messeges = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "", text: "Hey Mike" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername();
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      {messages.map((message) => (
        <Message00 username={username} message={message} />
      ))}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form style={{marginLeft:'0px', width:'100%'}} className="app__form">
        <input
        style={{}}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div>
          <button
            className="btn"
            style={{ backgroundColor: "#ffa600", fontColor: "black" }}
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Messeges;

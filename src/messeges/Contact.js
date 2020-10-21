import React from "react";
import "./messeges.css";

import { Link } from "react-router-dom";

const contacts = [
  {
    name: "Michael",
    phone: "+921 9922938",
    email: "peavy20@gmail.com",
  },
  {
    name: "Michael",
    phone: "+921 9922938",
    email: "peavy20@gmail.com",
  },
  {
    name: "Michael",
    phone: "+921 9922938",
    email: "peavy20@gmail.com",
  },
];

function Contact() {
  return (
    <div className="contacts">
      <ul>
        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>

        <div className="chover">
          <Link to="/messeges">
            <h2>Michael Peavy</h2>
            <p>phone:'+921 9922938',</p>
            <p> email: 'peavy20@gmail.com'</p>
          </Link>
        </div>

        <div className="underline"></div>
      </ul>
    </div>
  );
}

export default Contact;

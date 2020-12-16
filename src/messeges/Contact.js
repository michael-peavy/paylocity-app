import React from "react";
import "./messeges.css";
import { Avatar } from "@material-ui/core";


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

function Contact(profilePic) {
  return (
    <div className="">
      <ul>
       <br></br>
       <h1 style={{marginBottom:'45px', marginRight:'35px', marginTop:'15px'}}>Contact List</h1>


<div className="contacts">

          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >UrBeLaunch-Team</h2>
            </div>

            <Avatar style={{marginLeft:'18px', marginRight:'10px'}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>


          
          <div className="underline"></div>

          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >Michael Peavy</h2>
            </div>

            <Avatar style={{}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>


          
          <div className="underline"></div>
          

          


          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >Kongsee Yang</h2>
            </div>

            <Avatar style={{}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>
          <div className="underline"></div>

          


          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >Javier Rodriguez</h2>
            </div>

            <Avatar style={{marginLeft:'10px', marginRight:'10px'}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>
          <div className="underline"></div>

          


          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >Lenna Flattley</h2>
            </div>

            <Avatar style={{}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>
          <div className="underline"></div>

          


          <Link to="/messeges">
          <div className='display' >
          <div className="chover">

            <h2 style={{}} >Michael Peavy</h2>
            </div>

            <Avatar style={{}} />
            </div> 

            <p style={{marginLeft:'38px'}} >phone:'+921 992-2938',</p>
            <p style={{marginLeft:'38px'}}> email: 'peavy20@gmail.com'</p>
          </Link>
          <div className="underline"></div>
          </div>






        









      </ul>
    </div>
  );
}

export default Contact;

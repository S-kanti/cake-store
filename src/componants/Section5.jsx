import React, { Component } from "react";
import contactimg from './assestes/contactimg.png';
import "./myStyles.css";
import FormContact from "./FormContact";
import Myform from "./Myforn";

class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <h2>Contact Us</h2>
        <div className="contact">
          <div className="contacts">
            <p className="contactusp">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department phone, email you'd like to connect
              below
            </p>
            <img className="contactimg" src={contactimg} aLt=""></img>
          </div>
          <div className="contacts"><Myform/></div>
        </div>
      </div>
    );
  }
}

export default Section5;

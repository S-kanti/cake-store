import React, { Component } from "react";
import secondCake from './assestes/secondCake.png'

class Section2 extends Component {
  state = {};
  render() {
    return (
      <div className="section2">
        <div className="mainpic2">
          <img className="secondCake" src={secondCake} alt="cake"></img>
        </div>
        <div className="about">
          <h2>We Love Cheesecake</h2>
          <p className="discover">Discover Our Cheesecake Story</p>
          <p className="story">
            At Cheesecake Love, quality is our cornerstone. Each cheesecake is
            crafted with the finest ingredients, meticulous attention to detail,
            and a dash of creativity. We believe in delivering not just desserts
            but moments of sheer indulgence.
          </p>
          <p className="story">We believe in delivering not just desserts but moments of sheer indulgence.</p>
          <div className="btns">
            <button className="headBtn">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;

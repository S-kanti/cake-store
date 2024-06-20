import React, { Component } from "react";
import './myStyles.css';
import c1 from "./assestes/c1.png";
import c2 from "./assestes/c2.png";
import c3 from "./assestes/c3.png";

class Section3 extends Component {

  render() {
    return (
      <div className="section3">
        <h2>Our Menu </h2>
        <div className="mnues">
          <div className="mnue">
            <img className="nmueimg" src={c1} alt=''></img>
            <h3>Blueberry Cheesecake</h3>
            <p className="cakedes">Blueberry love, cheesecake delight!</p>
            <p><strong>₦ 2000</strong></p>
          </div>
          <div className="mnue">
            <img className="nmueimg" src={c2} alt=''></img>
            <h3>Biscoff Cheesecake</h3>
            <p className="cakedes">Biscoff adores cheesecake magic</p>
            <p><strong>₦ 2000</strong></p>
          </div>
          <div className="mnue">
            <img className="nmueimg" src={c3} alt=''></img>
            <h3>Chocolate Cheesecake</h3>
            <p className="cakedes">Cherish Chocolate, relish cheesecake magic!</p>
            <p><strong>₦ 2500</strong></p>
          </div>
        </div>
        <p className="viewmore">View More </p>
      </div>
    );
  }
}

export default Section3;

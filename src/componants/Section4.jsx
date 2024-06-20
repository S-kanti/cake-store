import React, { Component } from "react";
import "./myStyles.css";
import blogimg from './assestes/blogimg.jpg'
import blogimg2 from './assestes/blogimg2.jpg'
import blogimg3 from './assestes/blogimg3.jpg'
class Section4 extends Component {
  render() {
    return (
      <div className="section4">
        <h2 className="h2blog">Blog</h2>
        <p className="respost">Our Recent Posts</p>
        <div className="blogs">
          <div className="blog">
            <img className="blogimg" src={blogimg} alt=""></img>
            <p className="postdate">23 Nov, 2023 / Cheesecake</p>
            <h3 className="h3blog">A Peek Behind the Cheesecake Curtain</h3>
            <p className="blogdes">
              Step into our cheesecake haven, where the magic unfolds behind the
              scenes, whisking dreams into reality. Our kitchen is a symphony
              and very...
            </p>
            <p className="readmore">Read More</p>
          </div>
          <div className="blog">
            <img className="blogimg" src={blogimg2} alt=""></img>
            <p className="postdate">18 July, 2023 / Cheesecake</p>
            <h3 className="h3blog">Low-Sugar & Gluten-Free Cheesecakes</h3>
            <p className="blogdes">
              Welcome to our guilt-free indulgence zone, where we're redefining
              the art of cheesecake with our delectable low-sugar...
            </p>
            <p className="readmore">Read More</p>
          </div>
          <div className="blog">
            <img className="blogimg" src={blogimg3} alt=""></img>
            <p className="postdate">1 January, 2024 / Cheesecake</p>
            <h3 className="h3blog">Sweet Words - Customer Reviews of Cheesecakes</h3>
            <p className="blogdes">
              Indulge in the rich tapestry of heartfelt stories within "Sweet
              Words." This curated collection of customer reviews offers a
              glimpse into the joy...
            </p>
            <p className="readmore">Read More</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;

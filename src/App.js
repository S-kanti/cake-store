import React from "react";
import NavBar from "./componants/NavBar";
import Section2 from "./componants/Section2";
import Section3 from "./componants/Section3";
import Section4 from "./componants/Section4";
import Section5 from "./componants/Section5";
import './App.css';
import Footer from "./componants/Footer";

const App = () => {
 
  return (
    <div className="App">
      <NavBar />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer/>
    </div>
  );
};

export default App;

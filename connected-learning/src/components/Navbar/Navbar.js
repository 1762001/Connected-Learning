import React from "react";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import "./Navbar.css";


const Navbar = () => {
  // const togglebutton =document.getElementsByClassName('toggle-buuton')[0]
  // const navbarLinks = document.getElementsByClassName('.nav')[0]

 function toggle(){
  const x = document.getElementsByClassName("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  }
  return (
    <>
      <div className="header">
        <div id="websiteName">
          <a href="/">
            <span style={{ backgroundColor: "none", color: "white" }}>
              <i className="fab fa-accusoft"></i>
            </span>
            <span>
              <h2>Connected learning</h2>
            </span>
          </a>
        </div>
        
        <div className="nav">
          <Navigation/>
          <MobileNav/>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;

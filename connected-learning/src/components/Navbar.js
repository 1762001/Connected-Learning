import React, { Component } from 'react';
<<<<<<< HEAD


class Navbar extends Component {
    render() {
        return (
            <div >
                
=======
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
          
        <div className="header">
        <div id="websiteName">
          <a href="/"><span style={{backgroundColor:"none"}}><i className="fab fa-accusoft"></i></span><span><h2>Connected learning</h2></span></a>

        </div>
        <div className="nav">
          <ul className="horizontal-list text-right">
            
            <li><a href="/"><span style={{marginRight: "5px"}}><i className="fas fa-book-reader"></i></span><span>Encyclopedia</span>
            </a></li>
          
            <li><a href="/"><span style={{marginRight: "5px"}}><i className="far fa-id-card"></i></span><span>Profile Enhancer</span></a></li>
            <li><a href="/"><span style={{marginRight: "5px"}}><i className="fas fa-comment"></i></span><span>Chat</span></a></li>
            <li><span><a href="/"><span style={{backgroundColor: "lightslategray", borderRadius: "50%" , marginRight: "5px"}}><i className="fas fa-user-circle"></i></span><span>sign out</span></a></span></li>
            <li><form className="d-flex">
              <input className="form-control searchbox me-2 p-1" type="search" placeholder="Search" aria-label="Search"/>
              
            </form></li>  
          </ul>
            
        </div>
>>>>>>> 13593e8813dc0ead4bb9976c294a0a71ed6e5da2
            </div>
        );
    }
}

export default Navbar;
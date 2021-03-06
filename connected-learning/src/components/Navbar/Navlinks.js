import React from 'react';
import "./Navbar.css";
const Navlinks = () => {
  return (
  <ul className="horizontal-list text-right">
            <li>
              <a href="/">
                <span style={{ marginRight: "5px" }}>
                  <i className="fas fa-book-reader"></i>
                </span>
                <span>Encyclopedia</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span style={{ marginRight: "5px" }}>
                  <i className="far fa-id-card"></i>
                </span>
                <span>Profile Enhancer</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span style={{ marginRight: "5px" }}>
                  <i className="fas fa-comment"></i>
                </span>
                <span>Chat</span>
              </a>
            </li>
            
            <li>
              <span>
                <a href="/">
                  <span
                    style={{
                      backgroundColor: "lightslategray",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  >
                    <i className="fas fa-user-circle"></i>
                  </span><span>sign in</span>
                </a>
              </span>
            </li>
            <li>
              <a href="/">
                <span style={{ marginRight: "5px" }}>
                  <i className="fas fa-envelope-open-text"></i>
                </span>
              </a>
            </li>

            <li>
              <form className="d-flex">
                <input
                  className="form-control searchbox me-2 p-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
            
          </ul>
  );
};

export default Navlinks;

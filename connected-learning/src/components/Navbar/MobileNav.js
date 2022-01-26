import React,{useState} from 'react';
import Navlinks from './Navlinks';
import "./Navbar.css"

const MobileNav = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="mobileNav">
      {/* <a href="/" className="toggle-button"onClick={()=>console.log('clicked')} >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </a> */}
      <div className='toggle-button' onClick={()=>setopen(!open)}><i className="fas fa-3 fa-bars"style={{fontSize:"2.5rem"}}></i></div>
      {open && <Navlinks/>}
    </div>
  )
};

export default MobileNav
;

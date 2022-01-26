import React from 'react';
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
       <ul type='none' className='mt-4'>
           <li className='fw-bold'>Department</li>
           <form action="" className='mt-2'>
           <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                       CSE
                    </label>
                    
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      MECH
                    </label>
                    
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                       ETC
                    </label>
                    
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                       ELECTRICAL
                    </label>
                    
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                       CIVIL
                    </label>
                    
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                       CHEMICAL
                    </label>
                    
            </div>
                <button type='submit' className='mt-4 btn btn-secondary'>Apply Filter</button>
           </form>
       </ul>
        
        <div className="content">
            ..
        </div>

    </div>
  );
}

export default Sidebar;

import React from 'react';
import Lectures from './Lectures';
import './Content.css'
const Content=()=> {
  return <div className='content_vid' style={{ backgroundColor: "black"}} >
    <h1 style={{ marginBottom: "30px" ,paddingTop:'50px',color:'white'}} className="text-center">
          React Course
    </h1>
     <div className="container">   
        <div className="row my-4" >
            <div className="col-md-4 ">
                <Lectures/>
            </div>
            <div className="col-md-4">
                <Lectures/>
            </div>
            <div className="col-md-4">
                <Lectures/>
            </div>
            <div className="col-md-4">
                <Lectures/>
            </div>
            <div className="col-md-4">
                <Lectures/>
            </div>
            <div className="col-md-4">
                <Lectures/>
            </div>
        </div>
    </div>
  </div>;
}

export default Content;

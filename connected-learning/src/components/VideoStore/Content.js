import React from 'react';
import Lectures from './Lectures';

const Content=()=> {
  return <div>
    <h1 style={{ margin: "35px 0px" ,marginTop:'50px',color:'white'}} className="text-center">
          React Course
    </h1>
     <div className="container my-3">   
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

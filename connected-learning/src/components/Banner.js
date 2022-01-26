import React, { useState, useEffect } from "react";
import './Banner.css'

function Banner() 
{
    

  return (
    <header className="banner mt-0"
         style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://sheptytskyinstitute.ca/wp-content/uploads/2018/08/masi-bookstore-banner.jpg")`
        ,
        backgroundPosition: "center center",
      }}
    >
        <div className="banner-contents">
            <h1 className="banner-title">
          
            </h1>
            
        

        
         
       
      </div>

      <div className="banner-fade" />
    </header>
  );
}

export default Banner;

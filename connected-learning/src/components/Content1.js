import React from 'react';
import Books from './Books';
import './Content1.css'
function Content1() {
  return (
    <div className='content'>
        <h1 className='mt-2 center'>BOOKS</h1>
        <div className='Book_Display'>
              <Books/>
              <Books/>
              <Books/>
              <Books/>
              <Books/>
              <Books/>
              <Books/>
              <Books/>
        </div>
              
              

        
    </div>
  );
}

export default Content1;

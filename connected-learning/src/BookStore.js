import React from 'react';
import Banner from './components/Banner';
import Content from './components/Content';
import Sidebar from './components/Sidebar'

function BookStore() {
    return (
      <div className="book_store">
        <Banner/>
        <Sidebar/>
        <Content/>
      </div>
    );
  }
  
  export default BookStore;

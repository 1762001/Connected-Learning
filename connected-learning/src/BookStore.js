import React from 'react';
import Banner from './components/Banner';
import Content1 from './components/BookStore/Content1'
import Sidebar from './components/Sidebar'

function BookStore() {
    return (
      <div className="book_store">
        <Banner/>
        <Sidebar/>
        <Content1/>
      </div>
    );
  }
  
  export default BookStore;

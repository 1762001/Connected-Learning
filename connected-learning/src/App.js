import React from 'react';
import './App.css';
import BookStore from './BookStore';

import Navbar from './components/Navbar/Navbar';
// import Content from './components/VideoStore/Content';




function App() {
  return (
    <div className="app">
      <Navbar/>
      <BookStore/>
    </div>
  );
}

export default App;

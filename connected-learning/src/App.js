import React from 'react';
import './App.css';
import BookStore from './BookStore';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <BookStore/>
    </div>
  );
}

export default App;

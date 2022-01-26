import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/VideoStore/Content';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;

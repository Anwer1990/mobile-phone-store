import React from 'react';
import './App.css';
import Router from './Components/Router';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router/> 
      {/* <Fouter />    */}
    </div>
  );
}

export default App;

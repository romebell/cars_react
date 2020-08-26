import React from 'react';
import logo from './tesla_logo.png';
import './App.css';
import Tesla from './Tesla';
import Lamborghini from './Lamborghini';
import Ferrari from './Ferrari';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://www.tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Tesla
        </a>
      </header>
      <Tesla />
      <Lamborghini />
      <Ferrari />
    </div>
  );
}

export default App;

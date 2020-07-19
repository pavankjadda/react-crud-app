import React from 'react';
import Home from './home/home';
import logo from './logo.svg';
import './App.css';

function App()
{
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Home
            </p>
            <Home/>
        </header>
      </div>
  );
}

export default App;

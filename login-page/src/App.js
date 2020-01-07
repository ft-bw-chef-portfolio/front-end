import React from 'react';
import logo from './tea-cup.png';
import './App.scss';
import Login from './components/Login';
import { Route } from "react-router-dom";
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" />
        <img src={logo} className="App-logo" alt="logo" /> */}
        <header className='logo-header'>
          <img src={logo} className='logo' alt='logo' />
          <p>Chef Portfolio</p>
        

        <main>
        <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
        </main>
        </header>
    </div>
  );
};

export default App;

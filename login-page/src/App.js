import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './components/Login';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" />
        <img src={logo} className="App-logo" alt="logo" /> */}
        <Login />

        <main>
          <Route exact path="/login">
            <Login />
          </Route>
        </main>
    </div>
  );
};

export default App;

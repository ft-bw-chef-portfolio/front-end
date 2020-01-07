import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Chef Portfolio</h1>
      <HomePage />
      <SignUp />
    </div>
  );
}

export default App;

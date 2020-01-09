import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav"
import HomePage from "./components/HomePage";
import Recipe from "./components/Solo_Recipe";
import SignUp from './components/SignUp';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1 className='title'>Chef Portfolio</h1>
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={Recipe} />
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;

import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import Recipe from "./components/Recipe";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Chef Portfolio</h1>
      {/* <SignUp /> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recipes/:id" component={Recipe} />
    </div>
  );
}

export default App;

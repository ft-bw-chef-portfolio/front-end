import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import Recipe from './components/Recipe';
import SignUp from './components/SignUp';
import NewRecipe from './components/NewRecipe';

function App() {
  return (
    <div className="App">
      <h1>Chef Portfolio</h1>
      {/*       <SignUp />
       */}
      <Route path="/signup" component={SignUp} />
      <Route path="/newrecipe" component={NewRecipe} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recipes/:id" component={Recipe} />
    </div>
  );
}

export default App;

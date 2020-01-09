import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Recipe from './components/Solo_Recipe';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NewRecipe from './components/NewRecipe';
import EditRecipe from './components/EditRecipe';
import Portfolio from './components/Portfolio';
import ChefUser from './components/ChefUser';

function App() {
  return (
    <div className="App">
      <h1>Chef Portfolio</h1>
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route path="/recipes/:id" component={Recipe} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/newrecipe" component={NewRecipe} />
      <Route path="/chefs/:id/recipes" component={Portfolio} />
      <Route path="/chefUser" component={ChefUser} />
      <Route path="/editrecipe" component={EditRecipe} />
    </div>
  );
}

export default App;

import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Recipe from './components/Solo_Recipe';
import NewRecipe from './components/NewRecipe';
import EditRecipe from './components/EditRecipe';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

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
      <Route exact path="/recipes/:id" component={Recipe} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/newrecipe" component={NewRecipe} />
      <Route path="/editrecipe" component={EditRecipe} />
      <Route path="/chefs/:id/recipes" component={Portfolio}/>
    </div>
  );
}

export default App;

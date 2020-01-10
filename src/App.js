import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Recipe from './components/Solo_Recipe';
import NewRecipe from './components/NewRecipe';
import EditRecipe from './components/EditRecipe';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Chef Portfolio</h1>
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recipes/:id" component={Recipe} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/chefs/:id/recipes" component={Portfolio}/>

      <PrivateRoute path="/newrecipe" component={NewRecipe} />
      <PrivateRoute path="/editrecipe" component={EditRecipe} />
     
    </div>
  );
}

export default App;

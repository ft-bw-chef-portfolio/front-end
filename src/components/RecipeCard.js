import React from "react";
import logo from "./logo.svg";
import "./App.css";

function RecipeCard({ recipes }) {
  return (
    <div className="App">
      <h1>{recipes.title}</h1>
      <h3>{recipes.chef.name}</h3>
    </div>
  );
}

export default RecipeCard;
// // // // // // // // // // //

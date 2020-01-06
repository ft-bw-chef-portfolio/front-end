import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="App">
      <img src={recipe.image} alt="recipe pic" />
      <h1>{recipe.title}</h1>
      <h3>{recipe.chef.name}</h3>
    </div>
  );
}

export default RecipeCard;

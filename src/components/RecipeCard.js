import React from "react";

function RecipeCard({ recipes }) {
  return (
    <div className="App">
      <h1>{recipes.title}</h1>
      <h3>{recipes.chef.name}</h3>
    </div>
  );
}

export default RecipeCard;

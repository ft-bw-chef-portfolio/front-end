import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Solo_Recipe";

function RecipeCard({ recipe, error }) {
  return (
    <div className="App">
      <Link to={`/recipes/${recipe.id}`}> 
        <div className="single-recipe">
          {error && <p>{error}</p>}
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="recipe pic" width="200px" height="200px" /> 
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;

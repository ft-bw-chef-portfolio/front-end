import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Solo_Recipe";
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe } from '../store/actions';

function RecipeCard({ recipe, error, id }) {
  const dispatch = useDispatch();
  const {isLoggedin} = useSelector((state) => state);

 const removeRecipe = id =>{
    // preventDefault();
    dispatch(deleteRecipe(id));
 }
  
  return (
    <div>
      <Link to={`/recipes/${recipe.id}`}> 
        <div className="single-recipe">
          {error && <p>{error}</p>}
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="recipe pic" width="200px" height="200px" /> 
        </div>
      </Link>

      {isLoggedin && 
      <div>
        <Link to="/editrecipe"><button>Edit</button></Link>
        <button onClick={() => removeRecipe(id)}>Delete</button>
      </div>}

    </div>
  );
}

export default RecipeCard;

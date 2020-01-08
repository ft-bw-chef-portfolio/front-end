import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";

import { fetchSingleRecipe} from "../../store/actions";

function Recipe({ fetchSingleRecipe, recipe, error, isFetching }) {

  const { id } = useParams();

  useEffect(() => {
    const recipe_id = id ? id : 1
    fetchSingleRecipe(recipe_id);
    console.log("This should fetch a single recipe");
  }, [id]);

  if (isFetching) {
    return <h2>Loading Recipe...</h2>;
  }
  //console.log("Is this displaying???");

  return (
    <div className="single-recipe">
      {error && <p>{error}</p>}
      
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe pic" width="200px" height="200px" />
      <h3> Meal Type: {recipe.meal_type} </h3> 
      <h3>Chef: {recipe.chef && recipe.chef.name}</h3> 

      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients && recipe.ingredients.map(item => (<li>{item}</li>))}
      </ul>

      <p>Instructions: </p>
      <ol>
      {recipe.instructions && recipe.instructions.map(item => (<li>{item}</li>))}
      </ol>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSingleRecipe })(Recipe);

// const currentRecipe = props.recipes.find(curr => {
//   return Number(curr.id) === Number(props.match.params.id);
// })
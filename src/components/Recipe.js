import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSingleRecipe } from "../store/actions";

function Recipe({ fetchSingleRecipe, recipe, error, isFetching }) {
  
  useEffect(() => {
    fetchSingleRecipe(1);
  }, []);

  if (isFetching) {
    return <h2>Loading Recipe...</h2>;
  }
  console.log("Is this displaying???");

  return (
    <div className="single-recipe">
      {error && <p>{error}</p>}
      <h1>Here is a recipe</h1>
      <h1>{recipe.title}</h1>
      {/* <img src={recipe.image} alt="recipe pic" width="200px" height="200px" />
      <h3> Meal Type: {recipe.meal_type.name}</h3> */}
      {/* <h3>Chef: {recipe.chef.name}</h3> */}
      <p>Ingredients: </p>
      <p>Instructions:</p>
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

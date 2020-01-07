import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";

import { fetchSingleRecipe, fetchInstructions } from "../../store/actions";

function Recipe({ fetchSingleRecipe, fetchInstructions, recipe, error, isFetching, instructions }) {

  const { id } = useParams();

  useEffect(() => {
    const recipe_id = id ? id : 1
    fetchSingleRecipe(recipe_id);
    console.log("hello world");
  }, [id]);

  useEffect(() => {
    fetchInstructions();
    console.log("This should fetch instructions");
  }, []);

  if (isFetching) {
    return <h2>Loading Recipe...</h2>;
  }
  //console.log("Is this displaying???");

  return (
    <div className="single-recipe">
      {error && <p>{error}</p>}
      <h1>Here is a recipe</h1>
      <h1>{recipe.title}</h1>
      <p>{console.log(recipe.chef)}</p>
      <img src={recipe.image} alt="recipe pic" width="200px" height="200px" />
      <h3> Meal Type: {recipe.meal_type && recipe.meal_type.name}</h3> 
      <h3>Chef: {recipe.chef && recipe.chef.name}</h3> 
      <ol>
        <p>Ingredients: {recipe.ingredients && recipe.ingredients.map(item => (<li>{item.name}</li>))} </p>
      </ol>
      <p>Instructions: {instructions && instructions.map(item => item.description)}</p>
      <p>{console.log(instructions)}</p>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    recipe: state.recipe,
    isFetching: state.isFetching,
    instructions: state.instructions,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSingleRecipe, fetchInstructions })(Recipe);

// const currentRecipe = props.recipes.find(curr => {
//   return Number(curr.id) === Number(props.match.params.id);
// })
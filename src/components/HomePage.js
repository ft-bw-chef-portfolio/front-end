import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchRecipes } from "../store/actions";

import RecipeCard from "./RecipeCard";

const HomePage = ({ fetchRecipes, recipes, error, isFetching }) => {
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  if (isFetching) {
    return <h2>Loading Recipes...</h2>;
  }
  return (
    <div className="recipe-list">
      {error && <p>{error}</p>}
      {recipes.map(recipe => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchRecipes })(HomePage);

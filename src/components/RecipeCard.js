/* import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

function RecipeCard({ recipe }) {
  return (
    <div className="App">
      <h1>{recipe.id}</h1>
      <img src={recipe.image} alt="recipe pic" width="200px" height="200px" />
      <Link to={`/recipes/${recipe.id}`}>
        {recipe.title}
        <Recipe key={recipe.id} recipe={recipe} title={title} />
      </Link>
      <h3>Chef: {recipe.chef.name}</h3>
    </div>
  );
}

export default RecipeCard;

//   {movies.map(movie => (
//     <Link to={`/movies/${movie.id}`}>
//       <MovieDetails key={movie.id} movie={movie} />
//     </Link>
 */

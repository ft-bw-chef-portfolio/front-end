import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRecipe } from '../store/actions';
import { Redirect } from 'react-router';
import '../styles/styles.scss';

const NewRecipe = () => {
  const dispatch = useDispatch();
  const { isPosting, isPosted } = useSelector(state => state);
  //state
  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    meal_type_id: '',
    ingredients: [],
    instructions: []
  });

  if (isPosting) {
    return <h2>Posting Recipe</h2>;
  }

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
    console.log(e.target);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch(createNewRecipe(recipe));
    console.log(recipe);
  };

  if (isPosted) return <Redirect to="/" />;

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={submitForm}>
          <h1> New Recipe</h1>
          <input
            name="title"
            className="title"
            placeholder="Recipe Title"
            type="text"
            onChange={handleChanges}
          />
          <input
            name="image"
            className="image"
            placeholder="URL of image"
            type="text"
            onChange={handleChanges}
          />
          <input
            name="meal_type_id"
            className="username"
            placeholder="Recipe Type"
            type="text"
            onChange={handleChanges}
          />
          <input
            name="ingredients"
            className="ingredients"
            placeholder="Ingredients"
            type="text"
            onChange={handleChanges}
          />
          <textarea
            name="instructions"
            className="instructions"
            placeholder="Instructions"
            type="text"
            onChange={handleChanges}
          />
          <button type="submit">Submit New Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;

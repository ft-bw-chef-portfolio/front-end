import React, { useState} from "react";
import { useForm } from "react-hook-form";
import "../styles/signup.scss";
import { useDispatch, useSelector } from 'react-redux';
import { editRecipe } from "../store/actions";

const EditRecipe = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, watch, recipeid } = useForm();

  const [ingredients, setIngredients] = useState({});

  const [instructions, setInstructions] = useState({
    position: 1
  });

  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    meal_type_id: "",
    ingredients: ingredients,
    instructions: instructions
  });

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
    // console.log(e.target);
  };

  const handleEditSubmit = id => {
    console.log(id);
    dispatch(editRecipe(id));
  };

  const handleEditIngredients = e => {
    setIngredients({
      ...ingredients,
      [e.target.name]: e.target.value
    });
  };

  const handleEditInstructions = e => {
    setInstructions({
      ...instructions,
      [e.target.name]: e.target.value
    });
  };

  // console.log(watch("example"));

  return (
    <div className="container">
      <div className="boxedit">
        <form onSubmit={handleEditSubmit}>
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
            name="name"
            className="ingredients"
            placeholder="Ingredients"
            type="text"
            onChange={handleEditIngredients}
          />
          <textarea
            name="description"
            className="instructions"
            placeholder="Instructions"
            type="text"
            onChange={handleEditInstructions}
          />
          <button type="submit">Submit New Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;

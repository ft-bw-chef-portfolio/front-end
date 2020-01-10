import React from "react";
import { useForm } from "react-hook-form";
import "../styles/signup.scss";

const EditRecipe = () => {
  const { handleSubmit, register, errors, watch } = useForm();

  const onSubmit = id => {
    console.log(id);
    dispatch(editRecipe(id));
  };



  console.log(watch("example"));

  return (
    <div className="container">
      <div className="boxedit">
        <form onSubmit={handleSubmit(recipeid)}>
          <h2> Edit Recipe </h2>
          <input
            name="title"
            placeholder="Recipe Title"
            type="text"
            ref={register}
          />
          {errors.title && <span>Required!</span>}

          <div className="image">
            {/* <img src="/images/placeholder.jpg" alt="Edit" /> */}
          </div>

          <input
            name="type"
            placeholder="Recipe Type"
            type="text"
            ref={register}
          />

          <textarea
            name="ingredients"
            placeholder="Ingredients"
            type="text"
            ref={register}
          />
          <textarea
            name="steps"
            placeholder="Recipe Steps"
            type="text"
            ref={register}
          />
          <button type="submit">Update Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;

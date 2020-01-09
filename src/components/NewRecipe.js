import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/_signup.scss';

const NewRecipe = () => {
  const { handleSubmit, register, errors, watch } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  console.log(watch('example'));

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2> New Recipe</h2>
          <input
            name="title"
            placeholder="Recipe Title"
            type="text"
            ref={register({ required: true })}
          />
          {errors.title && <span>Required!</span>}
          <button>Upload Image</button>
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
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;

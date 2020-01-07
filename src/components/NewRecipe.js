import React, { useState } from 'react';

const NewRecipe = () => {
  //state
  /* const [title] = '';
const [type]
const [ingredients]
const [steps] */

  return (
    <form>
      <h1> New Recipe</h1>
      <input
        name="username"
        className="username"
        placeholder="Recipe Title"
        type="text"
      />
      <button>Upload Image</button>
      <input
        name="username"
        className="username"
        placeholder="Recipe Type"
        type="text"
      />
      <input
        name="username"
        className="username"
        placeholder="Ingredients"
        type="text"
      />
      <textarea
        name="username"
        className="username"
        placeholder="Ingredients"
        type="text"
      />
      <textarea
        name="username"
        className="username"
        placeholder="Recipe Steps"
        type="text"
      />
    </form>
  );
};

export default NewRecipe;

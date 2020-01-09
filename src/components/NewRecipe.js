import React, { useState } from 'react';
//import '../styles/styles.scss';

const NewRecipe = () => {
  //state
  /* const [title] = '';
const [type]
const [ingredients]
const [steps] */

  return (
    <div className="container">
      <div className="box">
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
      </div>
    </div>
  );
};

export default NewRecipe;

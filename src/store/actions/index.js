import React from "react";
import axios from "axios";

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const START_SINGLE_FETCHING = "START_SINGLE_FETCHING";
export const FETCH_SINGLE_SUCCESS = "FETCH_SINGLE_SUCCESS";
export const FETCH_SINGLE_FAILURE = "FETCH_SINGLE_FAILURE";

export const START_INSTRUCTION_FETCHING = "START_INSTRUCTION_FETCHING";
export const FETCH_INSTRUCTION_SUCCESS = "FETCH_INSTRUCTION_SUCCESS";
export const FETCH_INSTRUCTION_FAILURE = "FETCH_INSTRUCTION_FAILURE";


export const fetchRecipes = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  axios
    .get(`https://bw4-chef-test.herokuapp.com/recipes`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .then(res => console.log("in fetch", res.data))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const fetchSingleRecipe = (id) => dispatch => {
  // action objects
  dispatch({ type: START_SINGLE_FETCHING });
  axios
    .get(`https://bw4-chef-test.herokuapp.com/recipes/${id}`)
    .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data }))
    // .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FETCH_SINGLE_FAILURE, payload: err.response }));
};

export const fetchInstructions = () => dispatch => {
  // action objects
  dispatch({ type: START_INSTRUCTION_FETCHING });
  axios
    .get(`https://bw4-chef-test.herokuapp.com/instructions`)
    .then(res => dispatch({ type: FETCH_INSTRUCTION_SUCCESS, payload: res.data }))
    // .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FETCH_INSTRUCTION_FAILURE, payload: err.response }));
};


import React from "react";
import axios from "axios";

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRecipes = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  axios
    .get(`https://bw4-chef-test.herokuapp.com/recipes/`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

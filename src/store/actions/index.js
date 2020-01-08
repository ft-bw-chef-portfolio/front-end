import React from "react";
import axios from "axios";

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const START_SINGLE_FETCHING = "START_SINGLE_FETCHING";
export const FETCH_SINGLE_SUCCESS = "FETCH_SINGLE_SUCCESS";
export const FETCH_SINGLE_FAILURE = "FETCH_SINGLE_FAILURE";

export const START_CHEFINFO_FETCHING = "START_CHEFINFO_FETCHING";
export const FETCH_CHEFINFO_SUCCESS = "FETCH_CHEFINFO_SUCCESS";
export const FETCH_CHEFINFO_FAILURE = "FETCH_CHEFINFO_FAILURE";



export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: START_LOGIN });

  axiosWithAuth()
    .post('https://chef-portfoliosis.herokuapp.com/api/auth/login', {
      username: username,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      history.push('/');
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

// REGISTER ACTIONS

export const START_REGISTER = 'START_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerUser = newUser => dispatch => {
  dispatch({ type: START_REGISTER });
  axios
    .post('https://chef-portfoliosis.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      localStorage.setItem('token', res.data.access_token);

      dispatch({ type: REGISTER_SUCCESS });
      history.push('/');
    })
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
}

// LOG OUT ACTIONS

export const START_LOGOUT = 'START_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logoutUser = () => dispatch => {
  dispatch({ type: START_LOGOUT });
  axiosWithAuth()
    .get('logout')
    .then(res => {
      localStorage.removeItem('token');

      dispatch({ type: LOGOUT_SUCCESS });
      history.push('/login')
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
}

// FETCH THE CHEFS DATA 


export const fetchRecipes = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/recipes`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .then(res => console.log("in fetch", res.data))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const fetchSingleRecipe = (id) => dispatch => {
  // action objects
  dispatch({ type: START_SINGLE_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/recipes/${id}`)
    .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data }))
    // .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FETCH_SINGLE_FAILURE, payload: err.response }));
};

export const fetchChefInfo = () => dispatch => {
  // action objects
  dispatch({ type: START_CHEFINFO_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/chefs`)
    .then(res => dispatch({ type: FETCH_CHEFINFO_SUCCESS, payload: res.data }))
    // .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FETCH_CHEFINFO_FAILURE, payload: err.response }));
};


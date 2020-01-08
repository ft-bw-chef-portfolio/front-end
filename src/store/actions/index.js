import React from "react";
import axios from "axios";
import { axiosWithAuth } from '../../utils/AxiosWithAuth';
import history from '../../history/history';

//ACTION TYPES

//All RECIPES ACTIONS
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

//SINGLE RECIPES ACTIONS
export const START_SINGLE_FETCHING = "START_SINGLE_FETCHING";
export const FETCH_SINGLE_SUCCESS = "FETCH_SINGLE_SUCCESS";
export const FETCH_SINGLE_FAILURE = "FETCH_SINGLE_FAILURE";

//CHEF INFO ACTIONS
export const START_CHEFINFO_FETCHING = "START_CHEFINFO_FETCHING";
export const FETCH_CHEFINFO_SUCCESS = "FETCH_CHEFINFO_SUCCESS";
export const FETCH_CHEFINFO_FAILURE = "FETCH_CHEFINFO_FAILURE";

//LOGIN ACTIONS
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// REGISTER ACTIONS
export const START_REGISTER = 'START_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// LOG OUT ACTIONS
export const START_LOGOUT = 'START_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


export const loginUser = info => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
    .post('https://bw4-chef-api.herokuapp.com/api/auth/login', {
      username: info.username, password: info.password
    })
    .then(res => {
      console.log("in login func", res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const registerUser = newUser => dispatch => {
  dispatch({ type: START_REGISTER });
  axios
    .post('auth/register', newUser)
    .then(res => {
      localStorage.setItem('token', res.data.access_token);

      dispatch({ type: REGISTER_SUCCESS });
      history.push('/');
    })
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
}

export const logoutUser = () => dispatch => {
  dispatch({ type: START_LOGOUT });
  axiosWithAuth()
    .get('auth/logout')
    .then(res => {
      localStorage.removeItem('token');

      dispatch({ type: LOGOUT_SUCCESS });
      history.push('/login')
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
}

//FETCH ALL RECIPES
export const fetchRecipes = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/recipes`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .then(res => console.log("in fetch", res.data))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

//FETCH SINGLE RECIPE
export const fetchSingleRecipe = (id) => dispatch => {
  dispatch({ type: START_SINGLE_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/recipes/${id}`)
    .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SINGLE_FAILURE, payload: err.response }));
};

// FETCH THE CHEFS DATA 
export const fetchChefInfo = () => dispatch => {
  dispatch({ type: START_CHEFINFO_FETCHING });
  axios
    .get(`https://bw4-chef-api.herokuapp.com/api/chefs`)
    .then(res => dispatch({ type: FETCH_CHEFINFO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_CHEFINFO_FAILURE, payload: err.response }));
};


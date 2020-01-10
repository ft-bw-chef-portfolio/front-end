import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, FETCH_SINGLE_SUCCESS, START_SINGLE_FETCHING, FETCH_SINGLE_FAILURE, START_CHEFINFO_FETCHING, FETCH_CHEFINFO_SUCCESS, FETCH_CHEFINFO_FAILURE, START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, START_REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, START_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, NEW_RECIPE_POST, NEW_RECIPE_SUCCESS, NEW_RECIPE_FAILURE, START_CHEF_RECIPES_FETCHING,FETCH_CHEF_RECIPES_SUCCESS, FETCH_CHEF_RECIPES_FAILURE, START_EDIT_FETCHING, EDIT_RECIPE_SUCCESS, EDIT_RECIPE_FAILURE, START_DELETE_FETCHING, DELETE_RECIPE_SUCCESS,  DELETE_RECIPE_FAILURE} from "../actions";


//possible states
const initialState = {
  recipes: [],
  isFetching: false,
  isLogging: false,
  isLoggedin: false,
  errorLogin: false,
  userLogged: false,
  isPosting: false,
  isPosted: false,
  isEditing: false,
  isDeleting: false,
  error: "",
  recipe: [],
  chefinfo: "",
  chefrecipes: []
};

//state transitioning
// error: '' clears out error message
// isfetching
const reducer = (state = initialState, action) => {
  switch (action.type) {

  //Login
case START_LOGIN:
  return { 
    ...state,
    errorLogin: null, 
    isLogging: true 
  };
case LOGIN_SUCCESS:
  return { 
    ...state, 
    isLogging: false, 
    isLoggedin: true, 
  };
case LOGIN_FAILURE:
  return { 
    ...state, 
    errorLogin: action.payload, 
    isLogging: false }
    ;

//Register
case START_REGISTER:
  return { 
    ...state, 
    errorRegistering: null, 
    isRegistering: true 
  };
case REGISTER_SUCCESS:
  return { 
    ...state, 
    isRegistering: false, 
    userLogged: true 
  };
case REGISTER_FAILURE:
  return { 
    ...state, 
    errorRegistering: action.payload, 
    isRegistering: false 
  };

//Logout
case START_LOGOUT:
  return { 
    ...state, 
    errorLogout: null, 
    isLoggingOut: true,
    isLoggedin: true, 
  };
case LOGOUT_SUCCESS:
  return { 
    ...state, 
    isLoggingOut: false, 
    userLogged: false, 
    isLoggedin: false,
  };
case LOGOUT_FAILURE:
  return { 
    ...state, 
    errorLogout: action.payload, 
    isLoggingOut: false 
  };

  //Fetching all recipes
case START_FETCHING:
  return {
    ...state,
    isFetching: true,
    error: ""
  };
case FETCH_SUCCESS:
  return {
    ...state,
    isFetching: false,
    error: "",
    recipes: action.payload
  };
case FETCH_FAILURE:
  return {
    ...state,
    error: action.payload,
    isFetching: false
  };   

//Fetching Single recipes
case START_SINGLE_FETCHING:
  return {
    ...state,
    isFetching: true,
    error: ""
  };
case FETCH_SINGLE_SUCCESS:
  return {
    ...state,
    isFetching: false,
    error: "",
    recipe: action.payload
  };
  case FETCH_SINGLE_FAILURE:
    return {
      ...state,
      error: action.payload,
      isFetching: false
    }; 

//Fetch Chef Info details
case START_CHEFINFO_FETCHING:
  return {
    ...state,
    isFetching: true,
    error: ""
  };
case FETCH_CHEFINFO_SUCCESS:
  return {
    ...state,
    isFetching: false,
    error: "",
    chefinfo: action.payload
  };
  case FETCH_CHEFINFO_FAILURE:
    return {
      ...state,
      error: action.payload,
      isFetching: false
    }; 

//Fetch specific chef info
case START_CHEF_RECIPES_FETCHING:
  return{
    ...state,
    isFetching: true,
    error: ""
  };
case FETCH_CHEF_RECIPES_SUCCESS:
  return{
    ...state,
  isFetching: false,
  error: "",
  chefrecipes: action.payload
  };
case FETCH_CHEF_RECIPES_FAILURE:
  return{
    ...state,
    error: action.payload,
    isFetching: false
  };

//New Recipe Post
case NEW_RECIPE_POST:
  return {
    ...state,
    recipes: [...state.recipes, action.payload],
    isPosting: true,
    error: ''
  };
case NEW_RECIPE_SUCCESS:
  return {
    ...state,
    recipe: action.payload,
    isPosting: false,
    isPosted: true,
    error: ''
  };
case NEW_RECIPE_FAILURE:
  return {
    ...state,
    isPosting: false,
    error: action.payload
  };
  
//Edit Recipe
case START_EDIT_FETCHING:
return{
  ...state,

};
case EDIT_RECIPE_SUCCESS:
return{
  ...state,

};
case EDIT_RECIPE_FAILURE:
return{
  ...state,

};

//Delete Recipe
case START_DELETE_FETCHING:
return{
  ...state,

};
case DELETE_RECIPE_SUCCESS:
return{
  ...state,

};
case DELETE_RECIPE_FAILURE:
return{
  ...state,

};

default:
  return state;
  }
};
export default reducer;

import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, FETCH_SINGLE_SUCCESS, START_SINGLE_FETCHING, FETCH_SINGLE_FAILURE, START_CHEFINFO_FETCHING, FETCH_CHEFINFO_SUCCESS, FETCH_CHEFINFO_FAILURE, START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, START_REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, START_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE} from "../actions";

//possible states
const initialState = {
  recipes: [],
  isFetching: false,
  isLogging: false,
  isLoggedin: false,
  errorLogin: false,
  userLogged: false,
  error: "",
  recipe: [],
  chefinfo: "",
};

//state transitioning
// error: '' clears out error message
// isfetching
const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    // case START_LOGOUT:
    //   return { 
    //     ...state, 
    //     errorLogout: null, 
    //     isLoggingOut: true 
    //   };
    // case LOGOUT_SUCCESS:
    //   return { 
    //     ...state, 
    //     isLoggingOut: false, 
    //     userLogged: false 
    //   };
    // case LOGOUT_FAILURE:
    //   return { 
    //     ...state, 
    //     errorLogout: action.payload, 
    //     isLoggingOut: false 
    //   };
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


    default:
      return state;
  }
};

export default reducer;

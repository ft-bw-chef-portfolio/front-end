import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, FETCH_SINGLE_SUCCESS, START_SINGLE_FETCHING, FETCH_SINGLE_FAILURE, START_INSTRUCTION_FETCHING, FETCH_INSTRUCTION_SUCCESS, FETCH_INSTRUCTION_FAILURE} from "../actions";

//possible states
const initialState = {
  recipes: [],
  isFetching: false,
  error: "",
  recipe: [],
  instructions: ""
};

//state transitioning
// error: '' clears out error message
// isfetching
const reducer = (state = initialState, action) => {
  switch (action.type) {
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

          case START_INSTRUCTION_FETCHING:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
          case FETCH_INSTRUCTION_SUCCESS:
            return {
              ...state,
              isFetching: false,
              error: "",
              instructions: action.payload
            };
            case FETCH_INSTRUCTION_FAILURE:
              return {
                ...state,
                error: action.payload,
                isFetching: false
              }; 

    // case NEW_SMURF_FETCH:
    //   return {
    //     ...state,
    //     smurfs: [...state.smurfs, action.payload],
    //     isFetching: true,
    //     error: ""
    //   };
    // case NEW_SMURF_SUCCESS:
    //   return {
    //     ...state,
    //     smurfs: action.payload,
    //     isFetching: false,
    //     error: ""
    //   };
    // case NEW_SMURF_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.payload
    //   };
    // case ADD_SMURF:
    //   const newS = {
    //     name: action.payload.name,
    //     age: action.payload.age,
    //     height: action.payload.height
    //   }
    // return[
    //   ...state.smurfs, newS
    // ]
    default:
      return state;
  }
};

export default reducer;

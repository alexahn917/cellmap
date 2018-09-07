import {
  AUTH_COMPLETE,
  AUTH_LOADING,
} from "../../actions/types";

const INITIAL_STATE = {
  user: null,
  token: null,
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_LOADING : {
      return {
        ...state,
        loading: true,
      }
    }
    case AUTH_COMPLETE : {
      return {
        ...state,
        loading: false,
      }
    }
    default :
      return state;
  }
}

export default authReducer;
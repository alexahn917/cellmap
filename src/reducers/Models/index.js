import {SET_CELL_MAP_DATA} from "../../actions/types";

const model = (state = {
  data: null,
}, action) => {
  switch (action.type) {
    case SET_CELL_MAP_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state
  }
};

export default model
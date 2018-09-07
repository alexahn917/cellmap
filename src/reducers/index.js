import {combineReducers} from 'redux'
import {routerReducer} from "react-router-redux";
import authReducer from "./Auth";
import mainReducer from "./Main";
import modelReducer from "./Models";

const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  model: modelReducer,
  routing: routerReducer,
});

export default rootReducer
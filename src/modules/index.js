import { combineReducers } from "redux";
import counter from './counter';
import thunkMiddlewareSample from "./thunkMiddlewareSample";

const rootReducer = combineReducers({
  counter,
  thunkMiddlewareSample,
});

export default rootReducer;

import { combineReducers } from "redux";
import counter from './counter';
import thunkMiddlewareSample from "./thunkMiddlewareSample";
import loading from './loading';


const rootReducer = combineReducers({
  counter,
  thunkMiddlewareSample,
  loading,
});

export default rootReducer;

import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';
import loading from './loading';
import error from './error';


const rootReducer = combineReducers({
  counter,
  posts,
  loading,
  error,
});

export default rootReducer;

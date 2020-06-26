import { combineReducers } from "redux";
import counter, {counterSaga, couterSaga} from './counter';
import thunkMiddlewareSample from "./thunkMiddlewareSample";
import loading from './loading';
import sagaMiddlewareSample, { sagaMiddlewareSampleGenerator } from "./sagaMiddlewareSample";
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  thunkMiddlewareSample,
  loading,
  sagaMiddlewareSample,
});

export function* rootSaga () {
  yield all([counterSaga(), sagaMiddlewareSampleGenerator()]);
}



export default rootReducer;

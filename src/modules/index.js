import { combineReducers } from "redux";
import counter, {counterSaga, couterSaga} from './counter';
import thunkMiddlewareSample from "./thunkMiddlewareSample";
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  thunkMiddlewareSample,
  loading,
});

export function* rootSaga () {
  yield all([counterSaga(), ]);
}



export default rootReducer;

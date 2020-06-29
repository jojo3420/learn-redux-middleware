import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import posts, { postsSaga } from './posts';
import loading from './loading';
import exception from './exception';

const rootReducer = combineReducers({
  counter,
  posts,
  loading,
  exception,
});

export function* rootSaga () {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;

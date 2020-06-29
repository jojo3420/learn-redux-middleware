import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import posts, { postsSaga } from './posts';
import posts2 from './posts2';
import loading from './loading';
import exception from './exception';

const rootReducer = combineReducers({
  counter,
  posts,
  posts2,
  loading,
  exception,
});

export function* rootSaga () {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;

import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';
import { put, call, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
// import { startLoading, endLoading } from "modules/loading";
import createRequestSaga from "lib/createRequestSaga";

// Actions
const PREFIX = 'sagaMiddlewareSample';
export const GET_POST = `${PREFIX}/GET_POST`;
const GET_POST_SUCCESS = `${GET_POST}_SUCCESS`;
const GET_POST_FAILURE = `${GET_POST}_FAILURE`;
export const GET_USERS = `${PREFIX}/GET_USERS`;
const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;
const GET_USERS_FAILURE = `${GET_USERS}_FAILURE`;


// ActionCreator
export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS, () => null);


// Saga function
// function* getPostSaga(action) {
//   console.log({ action });
//   const SUCCESS = `${action.type}_SUCCESS`;
//   const FAILURE = `${action.type}_FAILURE`;
//   yield put(startLoading(action.type));
//   try {
//     const response = yield call(api.getPost, action.payload);
//     yield put({ type: SUCCESS, payload: response.data });
//   } catch (e) {
//     console.error({ e });
//     yield put({ type: FAILURE, e });
//   }
//   yield put(endLoading(action.type));
// }

// function* getUsersSaga(action) {
//   console.log({ action });
//   const SUCCESS = `${action.type}_SUCCESS`;
//   const FAILURE = `${action.type}_FAILURE`;
//   yield put(startLoading(action.type));
//   try {
//     const response = yield call(api.getUsers);
//     yield put({ type: SUCCESS, payload: response.data });
//   } catch (e) {
//     console.error({ e });
//     yield yield put({ type: FAILURE, e });
//   }
//   yield put(endLoading(action.type));
// }

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);


// INITIAL_STATE
const INITIAL_STATE = {
  post: null,
  users: null,
};


const sagaMiddlewareSample = handleActions({
  [GET_POST_SUCCESS]: (state, { payload: post }) => {
    return { ...state, post };
  },
  [GET_USERS_SUCCESS]: (state, { payload: users }) => {
    return { ...state, users};
  }

}, INITIAL_STATE);

export function* sagaMiddlewareSampleGenerator() {
  yield takeEvery(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga)
}


export default sagaMiddlewareSample;

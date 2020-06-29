import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { put, throttle, call } from 'redux-saga/effects';
import * as api from 'lib/api';
import createRequestSaga from "lib/createReuqestSaga";


// Action
export const PREFIX = 'posts';
export const GET_POST = `${PREFIX}/GET_POST`;
const GET_POST_SUCCESS = `${GET_POST}_SUCCESS`;
export const GET_USERS = `${PREFIX}/GET_USERS`;
const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;


// // ActionCreator
export const getPost = createAction(GET_POST, id => id);
export const getUsers = () => ({ type: GET_USERS });


// function* getPostSaga (action) {
//   console.log({ action });
//   const { type, payload: params } = action;
//   const SUCCESS = `${type}_SUCCESS`;
//   yield put(startLoading(type));
//   try {
//     const response = yield call(api.getPost, params);
//     yield put({ type: SUCCESS, payload: response.data });
//   } catch (e) {
//     console.error({ e });
//     yield put(addException(type, e));
//   }
//   yield put(endLoading(type));
// }
//
// function* getUsersSaga (action) {
//   const { type, payload: params } = action;
//   const SUCCESS = `${type}_SUCCESS`;
//   yield put(startLoading(type));
//   try {
//     const response = yield call(api.getUsers, params);
//     yield put({ type: SUCCESS, payload: response.data });
//   } catch (e) {
//     console.error({ e });
//     yield put(addException(action.type, e));
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

const posts = handleActions({
  [GET_POST_SUCCESS]: (state, { payload: post }) => produce(state, draft => {
    draft.post = post;
  }),
  [GET_USERS_SUCCESS]: (state, { payload: users }) => {
    return { ...state, users };
  }

}, INITIAL_STATE);

export function* postsSaga () {
  yield throttle(4000, GET_POST, getPostSaga);
  yield throttle(2000, GET_USERS, getUsersSaga)
}

export default posts;

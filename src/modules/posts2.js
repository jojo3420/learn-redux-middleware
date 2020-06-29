import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from 'lib/api';
import createRequestThunk from "lib/createRequestThunk";

// Action
const PREFIX = 'posts2';
export const GET_POST_BY = `${PREFIX}/GET_POST_BY`;
const GET_POST_BY_SUCCESS = `${PREFIX}/GET_POST_BY_SUCCESS`;
export const GET_USERS = `${PREFIX}/GET_USERS`;
const GET_USERS_SUCCESS = `${PREFIX}/GET_USERS_SUCCESS`;



// Action Creator
// export const getPostBy = createAction(GET_POST_BY, id => id);
// export const getUsers = createAction(GET_USERS, () => null);


// redux-thunk랑 차이점은 액션 생성자가 1개 이다.
export const getPostBy = createRequestThunk(GET_POST_BY, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);


// INITIAL_STATE
const INITIAL_STATE = {
  post: null,
  users: null,
};


const posts2 = handleActions({
  [GET_POST_BY_SUCCESS]: (state, { payload: post}) => produce(state, draft => {
    draft.post = post;
  }),
  [GET_USERS_SUCCESS]: (state, { payload: users }) => produce(state, draft => {
    draft.users = users;
  }),
}, INITIAL_STATE);


export default posts2;

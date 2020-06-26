import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';
import produce from 'immer';
import createRequestThunk from "lib/createRequestThunk";

// Actions
const PREFIX = 'posts';
export const GET_POST_BY =  `${PREFIX}/GET_POST_BY`;
const GET_POST_BY_SUCCESS =  `${GET_POST_BY}_SUCCESS`;
const GET_POST_BY_FAILURE =  `${GET_POST_BY}_FAILURE`;
export const GET_USERS = `${PREFIX}/GET_USERS`;
const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;
const GET_USERS_FAILURE = `${GET_USERS}_FAILURE`;

// Action Creator
// Thunk
// export const getPostById = id => async dispatch => {
//   dispatch({ type: GET_POST_BY, loading: true });
//   try {
//      const response = await api.getPost(id)
//     dispatch({ type: GET_POST_BY_SUCCESS, loading: false, payload: response.data });
//
//   } catch (e) {
//     console.error({ e });
//     dispatch({ type: GET_POST_BY_FAILURE, error: e, loading: false });
//     throw e;
//   }
// };
//
// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS, loading: true });
//   try {
//     const response = await api.getUsers();
//     dispatch({ type: GET_USERS_SUCCESS, loading: false, payload: response.data });
//   } catch (e) {
//     console.error(e);
//     dispatch({ type: GET_USERS_FAILURE, loading: false, error: e});
//     throw e;
//   }
// };

export const getPostById = createRequestThunk(GET_POST_BY, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);


const INITIAL_STATE = {
  post: {
    data: null,
    // loading: false,
    // error: null,
  },
  users: {
    data: null,
    // loading: false,
    // error: null,
  },
};

const posts = handleActions({
  // [GET_POST_BY_FAILURE]: (state, { error, loading }) => produce(state, draft => {
  //   draft.post.error = error;
  // }),
  [GET_POST_BY_SUCCESS]: (state, { payload: post, loading }) => produce(state, draft => {
    draft.post.data = post;
  }),
  // [GET_USERS_FAILURE]: (state, { error, loading }) => produce(state, draft => {
  //   draft.users.error = error;
  // }),
  [GET_USERS_SUCCESS]: (state, { payload: users, loading }) => produce(state, draft => {
    draft.users.data = users;
  }),
}, INITIAL_STATE);


export default posts;

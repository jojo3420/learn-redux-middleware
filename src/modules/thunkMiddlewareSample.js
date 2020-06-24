import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';
import createRequestThunk from "lib/createRequestThunk";

// Actions
const PREFIX = 'thunkMiddlewareSample';
const GET_POST = `${PREFIX}/GET_POST`;
const GET_POST_SUCCESS = `${GET_POST}/SUCCESS`;
const GET_POST_FAILURE = `${GET_POST}/FAILURE`;
const GET_USERS = `${PREFIX}/GET_USERS`;
const GET_USERS_SUCCESS = `${GET_USERS}/SUCCESS`;
const GET_USERS_FAILURE = `${GET_USERS}/FAILURE`;



// Action Creator
// export const getPost = id => async dispatch => {
//   dispatch({
//     type: GET_POST,
//     loading: true,
//   });
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//       loading: false,
//     })
//   } catch (e) {
//     console.error(e);
//     dispatch({
//       type: GET_POST_FAILURE,
//       error: e,
//       loading: false,
//     });
//     throw e;
//   }
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);

// export const getUsers = () => async dispatch => {
//   dispatch({
//     type: GET_USERS,
//     loading: true,
//   });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//       loading: false,
//     })
//   } catch (e) {
//     console.error(e);
//     dispatch({
//       type: GET_USERS_FAILURE,
//       error: e,
//       loading: false,
//     });
//   }
// };

export const getUsers = createRequestThunk(GET_USERS, api.getUsers);



// initial state
const INITIAL_STATE = {
  post: {
    data: null,
    // loading: false,
    error: null
  },
  users: {
    data: null,
    // loading: false,
    error: null,
  },
};


const thunkMiddlewareSample = handleActions({
  // [GET_POST]: (state, { loading }) => {
  //   console.log( { loading });
  //   return {...state, post: {...state.post, loading }}
  // },
  [GET_POST_FAILURE]: (state, { error }) => {
    return { ...state, post: { ...state.post, error }}
  },
  [GET_POST_SUCCESS]: (state, { payload: data }) => {
    return {
      ...state,
      post: {...state.post, data },
    };
  },
  // [GET_USERS]: (state, { loading }) => {
  //   return {...state, users: {...state.users, loading } }
  // },
  [GET_USERS_FAILURE]: (state, { error }) => {
    return {...state, users: {...state.users, error }}
  },
  [GET_USERS_SUCCESS]: (state, { payload: data }) => {
    return {
      ...state,
      users: { ...state.users, data},
    }
  }
}, INITIAL_STATE);



export default thunkMiddlewareSample;




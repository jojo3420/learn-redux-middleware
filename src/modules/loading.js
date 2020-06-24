import { createAction, handleActions } from 'redux-actions'

// Actions
const PREFIX = `loading`;
const START_LOADING = `${PREFIX}/START_LOADING`;
const END_LOADING = `${PREFIX}/END_LOADING`;


export const startLoading = actionType => ({ type: START_LOADING, actionType});
export const endLoading = createAction(END_LOADING, actionType => actionType );


const INITIAL_STATE = {
  // posts,
  // users,
};

const loading = handleActions({
  [START_LOADING]: (state, { actionType }) => {
    console.log({ actionType })
    return {
      ...state,
      [actionType]: true
    }
  },
  [END_LOADING]: (state, { payload: actionType }) => {
    console.log({ actionType })
    return {
      ...state,
      [actionType]: false,
    }
  }

}, INITIAL_STATE);

export default loading;

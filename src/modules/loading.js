

// Action
const PREFIX = 'loading';
const START_LOADING = `${PREFIX}/START_LOADING`;
const END_LOADING = `${PREFIX}/END_LOADING`;

// ActionCreator
export const startLoading = actionType => ({ type: START_LOADING, actionType });
export const endLoading = actionType => ({ type: END_LOADING, actionType });



// initial-state
const INITIAL_STATE = {};


// reducer
const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, [action.actionType]: true };
    case END_LOADING:
      return { ...state, [action.actionType]: false };
    default:
      return state;
  }
}

export default loading;




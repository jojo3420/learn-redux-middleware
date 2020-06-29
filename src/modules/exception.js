// import { handleActions } from 'redux-actions';

const PREFIX = 'exception';
const ADD_EXCEPTION = `${PREFIX}/ADD_EXCEPTION`;
const CLEAR_EXCEPTION = `${PREFIX}/CLEAR_EXCEPTION`;

export const addException = (actionType, e) => ({ type: ADD_EXCEPTION, actionType, e });
export const clearException = actionType => ({ type: CLEAR_EXCEPTION, actionType });


const INITIAL_STATE = {};


export default function exception(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EXCEPTION:
      // console.log(action);
      return { ...state, [action.actionType]: action.e };
    case CLEAR_EXCEPTION:
      return { ...state, [action.actionType]: null };
    default:
      return state;
  }
}


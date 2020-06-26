

const PREFIX = 'error';
const ADD_ERROR = `${PREFIX}/ADD_ERROR`;
const CLEAR_ERROR = `${PREFIX}/CLEAR_ERROR`;

export const addError = (actionType, e) => ({ type: ADD_ERROR, actionType, e });
export const clearError = (actionType) => ({ type: CLEAR_ERROR, actionType });


const INITIAL_STATE = {};


const error = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {...state, [action.actionType]: action.e };
    case CLEAR_ERROR:
      return { ...state, [action.actionType]: null };
    default:
      return state;
  }
}


export default error;

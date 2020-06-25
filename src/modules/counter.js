

const PREFIX = 'counter';
const INCREASE = `${PREFIX}/INCREASE`;
const DECREASE = `${PREFIX}/DECREASE`;


export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// Thunk: 지연함수를 리턴한다.
export const increaseSync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState());
      dispatch(increase());
      console.log(getState());
    }, 1000);
  }
}

export const decreaseSync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};


const INITIAL_STATE = {
  number: 0,
};

const counter  = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1};
    case DECREASE:
      return  { ...state, number: state.number - 1};
    default:
      return state;
  }
}

export default counter;




import { createAction } from 'redux-actions';
import { takeEvery, takeLatest, delay, put } from 'redux-saga/effects';

// Actions
const PREFIX = 'counter';
const INCREASE = `${PREFIX}/INCREASE`;
const DECREASE = `${PREFIX}DECREASE`;
const INCREASE_SYNC = `${PREFIX}/INCREASE_SYNC`;
const DECREASE_SYNC = `${PREFIX}/DECREASE_SYNC`;


// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = createAction(DECREASE);

export const increaseSync = () => ({ type: INCREASE_SYNC });
// 클릭 event 객체가 전달되지 않도록 널 리턴
export const decreaseSync = createAction(DECREASE_SYNC, () => null);


function* increaseSaga () {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga () {
  yield delay(1000);
  yield put(decrease());
}

// initial state
const INITIAL_STATE = {
  number: 0
}

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1};
    default:
      return state;
  }
};

export function* counterSaga() {
  yield takeEvery(INCREASE_SYNC, increaseSaga);
  yield takeLatest(DECREASE_SYNC, decreaseSaga);
}

export default counter;



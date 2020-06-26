import {createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Actions
const PREFIX = 'counter';
const INCREASE = `${PREFIX}/INCREASE`;
const DECREASE = `${PREFIX}/DECREASE`;
const INCREASE_SYNC = `${PREFIX}/INCREASE_SYNC`;
const DECREASE_SYNC = `${PREFIX}/DECREASE_SYNC`;


// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = createAction(DECREASE);

export const increaseSync = () => ({ type: INCREASE_SYNC });
// click event 객체가 들어가지 않도록 () => null 처리
export const decreaseSync = createAction(DECREASE_SYNC, () => null);

// redux saga generator Function
export function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

export function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}


// initial State
const INITIAL_STATE = 0;


// pure function => reducer
const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,


}, INITIAL_STATE);

//
export function* counterSaga () {
  yield takeEvery(INCREASE_SYNC, increaseSaga);
  yield takeLatest(DECREASE_SYNC, decreaseSaga)
}


export default counter;






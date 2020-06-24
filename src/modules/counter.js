import {createAction, handleActions } from 'redux-actions';

// Actions
const PREFIX = 'counter';
const INCREASE = `${PREFIX}/INCREASE`;
const DECREASE = `${PREFIX}/DECREASE`;

// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = createAction(DECREASE);

// initial State
const INITIAL_STATE = 0;


// pure function => reducer
const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,


}, INITIAL_STATE);

export default counter;






import React from 'react';
import Counter from "components/Counter";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { increase, decrease, increaseSync, decreaseSync } from 'modules/counter';

function CounterContainer({ number, onIncrease, onDecrease, onIncreaseSync, onDecreaseSync }) {
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseSync={onIncreaseSync}
      onDecreaseSync={onDecreaseSync}
    />
  );
}

export default connect(
  ({ counter }) => ({
    number: counter.number,
  }),
  dispatch => bindActionCreators({
    onIncrease: increase,
    onDecrease: decrease,
    onIncreaseSync: increaseSync,
    onDecreaseSync: decreaseSync,
  }, dispatch)
)(CounterContainer);

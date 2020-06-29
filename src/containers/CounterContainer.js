import React from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import {increase, decrease, increaseSync, decreaseSync} from 'modules/counter';

function CounterContainer({ number, increase, decrease, increaseSync, decreaseSync }) {
  return (
    <Counter
      number={number}
      increase={increase}
      decrease={decrease}
      increaseSync={increaseSync}
      decreaseSync={decreaseSync}
    />
  );
}

export default connect(
  ({ counter, }) => ({
    number: counter.number,
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    increaseSync: () => dispatch(increaseSync()),
    decreaseSync: () => dispatch(decreaseSync()),
  })
)(CounterContainer);

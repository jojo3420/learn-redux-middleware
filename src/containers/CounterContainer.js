import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import {bindActionCreators} from "redux";
import { increase, decrease } from 'modules/counter';
import { increaseSync, decreaseSync } from 'modules/counter';


function CounterContainer({ counter, increase, decrease, increaseSync, decreaseSync }) {

  return (
    <>
      <Counter
        counter={counter}
        increase={increase}
        decrease={decrease}
        increaseSync={increaseSync}
        decreaseSync={decreaseSync}
      />
    </>
  );
}

export default connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators({
    increase: increase,
    decrease: decrease,
    increaseSync: increaseSync,
    decreaseSync: decreaseSync,
  }, dispatch)


)(CounterContainer);

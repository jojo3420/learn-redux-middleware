import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import {bindActionCreators} from "redux";
import { increase, decrease } from 'modules/counter';


function CounterContainer({ counter, increase, decrease }) {

  return (
    <>
      <Counter
        counter={counter}
        handleIncrease={increase}
        handleDecrease={decrease}
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
  }, dispatch)


)(CounterContainer);

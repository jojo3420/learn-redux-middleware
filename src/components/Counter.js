import React from 'react';

function Counter( { number, increase, decrease, increaseSync, decreaseSync }) {
  return (
    <div>
      <h3>Counter</h3>
      <h5>{number}</h5>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={increaseSync}>1초후 + 1</button>
      <button onClick={decreaseSync}>1초후 -1</button>
      <hr />
    </div>
  );
}

export default Counter;

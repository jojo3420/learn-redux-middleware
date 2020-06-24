import React from 'react';


function Counter({ counter, increase, decrease, increaseSync, decreaseSync }) {
  return (
    <div>
      <h2>counter app</h2>
      <p>{counter}</p>
      <button onClick={increase}>즉시 + 1</button>
      <button onClick={decrease}>즉시 - 1</button>
      <hr/>
      <button onClick={increaseSync}>1초후 + 1</button>
      <button onClick={decreaseSync}>1초후 - 1</button>
    </div>
  );
}

export default Counter;

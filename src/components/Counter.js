import React from 'react';

function Counter({ number, onIncrease, onDecrease, onIncreaseSync, onDecreaseSync }) {
  return (
    <div>
      <h2>Counter App</h2>
      <h5>{number}</h5>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <br/>
      <br/>
      <button onClick={onIncreaseSync}>1초후 +1</button>
      <button onClick={onDecreaseSync}>1초후 -1</button>
      <hr/>
    </div>
  );
}

export default Counter;

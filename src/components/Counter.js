import React from 'react';


function Counter({ counter, handleIncrease, handleDecrease }) {
  return (
    <div>
      <h2>counter app</h2>
      <p>{counter}</p>
      <button onClick={handleIncrease}>+ 1</button>
      <button onClick={handleDecrease}>- 1</button>
    </div>
  );
}

export default Counter;

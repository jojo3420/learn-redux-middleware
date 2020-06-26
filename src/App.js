import React from 'react';
import CounterContainer from "containers/CounterContainer";
import ThunkMiddlewareSampleContainer from "containers/ThunkMiddlewareSampleContainer";
import SagaMiddlewareSampleContainer from "containers/SagaMiddlewareSampleContainer";

function App() {
  return (
    <div>
      <h1>learn redux middleware</h1>
      <CounterContainer />
      <hr/>
      {/*<ThunkMiddlewareSampleContainer />*/}
      {/*<hr/>*/}
      <SagaMiddlewareSampleContainer />
    </div>
  );
}

export default App;

import React from 'react';
import CounterContainer from "containers/CounterContainer";
import PostsContainer from "containers/PostsContainer";
import PostsContainer2 from "containers/PostsContainer2";
function App() {
  return (
    <div>
      <h1>learn redux middleware</h1>
      <CounterContainer />
      <PostsContainer />
      <PostsContainer2 />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'modules/index';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
// import loggerMiddleware from "lib/loggerMiddleware";
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// const logger = createLogger();
const middleware = applyMiddleware(/*logger */  ReduxThunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


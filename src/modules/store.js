import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';

// const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(/*logger,*/ ThunkMiddleware, sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));
sagaMiddleware.run(rootSaga);

export default store;

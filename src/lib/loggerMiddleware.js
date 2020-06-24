
const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('before reducer: ', store.getState());
  console.log({ action });
  next(action);// next middleware or reducer
  console.log('after reducer: ', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

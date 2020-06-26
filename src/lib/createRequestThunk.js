import { startLoading, endLoading } from "modules/loading";
import { addError } from "modules/error";

function createRequestThunk (type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  // const FAILURE = `${type}_FAILURE`;
  return params => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(endLoading(type));
    } catch (e) {
      console.error(e);
      dispatch(endLoading(type));
      dispatch(addError(type, e));
      // throw e;
    }
  }
}

export default createRequestThunk;


import { startLoading, endLoading } from "modules/loading";
import { addException } from "modules/exception";



function createRequestThunk (type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  return params => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({ type: SUCCESS, payload: response.data });
    } catch (e) {
      console.error({ e });
      dispatch(addException(type, e));
    }
    dispatch(endLoading(type));
  }


}

export default createRequestThunk;

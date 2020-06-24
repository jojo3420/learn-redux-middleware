import { startLoading, endLoading } from "modules/loading";

/**
 * create thunk
 * @param actionType: string
 * @param request: network api request function
 * @returns {function(*=): function(...[*]=)}
 */
function createRequestThunk(actionType, request) {
  const SUCCESS = `${actionType}/SUCCESS`;
  const FAILURE = `${actionType}/FAILURE`;

  return params => async dispatch => {
    dispatch({ type: actionType});
    dispatch(startLoading(actionType));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      })
      dispatch(endLoading(actionType));
    } catch (e) {
      console.error(e);
      dispatch({
        type: FAILURE,
        error: e,
      });
      dispatch(endLoading(actionType));
      throw e;
    }
  }
}

export default createRequestThunk;


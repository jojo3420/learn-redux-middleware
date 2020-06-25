

function createRequestThunk (type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return params => async dispatch => {
    dispatch({ type, loading: true });
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
        loading: false,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: FAILURE,
        error: e,
        loading: false,
      })
    }
  }
}

export default createRequestThunk;


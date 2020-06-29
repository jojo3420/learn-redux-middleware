import { put, call } from 'redux-saga/effects';
import { startLoading, endLoading } from "modules/loading";
import { addException } from "modules/exception";


function createRequestSaga (type, request) {
    return function* ({ type, payload: params }) {
    const SUCCESS = `${type}_SUCCESS`;
    yield put(startLoading(type));
    try {
      const response = yield call(request, params);
      yield put({ type: SUCCESS, payload: response.data });
    } catch (e) {
      console.error({ e });
      yield put(addException(type, e));
    }
    yield put(endLoading(type));
  }

}


export default  createRequestSaga;

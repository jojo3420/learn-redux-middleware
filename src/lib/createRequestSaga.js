import { put, call, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import { startLoading, endLoading } from "modules/loading";

// Saga function
export default function createRequestSaga(type, request) {
  return function* (action) {
    console.log({ action });
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    yield put(startLoading(type));
    try {
      // action.payload === params
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.error({ e });
      yield put({
        type: FAILURE,
        e,
      });
    }
    yield put(endLoading(type));
  }

}

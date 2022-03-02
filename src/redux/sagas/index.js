import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DATA_FETCH, GET_DATA_SUCCESS } from '../actions';

function request(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

function* requestData() {
  for (let id = 1; id <= 5; id++) {
    const data = yield call(request, id);
    yield put({ type: GET_DATA_SUCCESS, data });
  }
}

function* sagas() {
  yield takeEvery(GET_DATA_FETCH, requestData);
}

export default sagas;

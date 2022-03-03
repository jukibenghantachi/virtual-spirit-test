import { call, put, takeEvery } from 'redux-saga/effects';
import {
  DELETE_DATA_FETCH,
  DELETE_DATA_SUCCESS,
  EDIT_DATA_FETCH,
  EDIT_DATA_SUCCESS,
  GET_DATA_FETCH,
  GET_DATA_SUCCESS,
  POST_DATA_FETCH,
  POST_DATA_SUCCESS,
} from '../actions';

function request(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

function post(body) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
}

function edit(params) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: 'PATCH',
    body: JSON.stringify(params.body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
}

function deleted(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return id;
}

function* requestData() {
  for (let id = 1; id <= 5; id++) {
    const data = yield call(request, id);
    yield put({ type: GET_DATA_SUCCESS, data });
  }
}

function* postData({ body }) {
  const data = yield call(post, body);
  yield put({ type: POST_DATA_SUCCESS, data });
}

function* editData({ id, body }) {
  const data = yield call(edit, { id, body });
  yield put({ type: EDIT_DATA_SUCCESS, data });
}

function* deleteData({ id }) {
  const data = yield call(deleted, id);
  yield put({ type: DELETE_DATA_SUCCESS, data });
}

function* sagas() {
  yield takeEvery(GET_DATA_FETCH, requestData);
  yield takeEvery(POST_DATA_FETCH, postData);
  yield takeEvery(EDIT_DATA_FETCH, editData);
  yield takeEvery(DELETE_DATA_FETCH, deleteData);
}

export default sagas;

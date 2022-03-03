export const GET_DATA_FETCH = 'GET_DATA_FETCH';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const POST_DATA_FETCH = 'POST_DATA_FETCH';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const EDIT_DATA_FETCH = 'EDIT_DATA_FETCH';
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS';
export const DELETE_DATA_FETCH = 'DELETE_DATA_FETCH';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';

export const getData = () => ({
  type: GET_DATA_FETCH,
});

export const postData = ({ body }) => ({
  type: POST_DATA_FETCH,
  body,
});

export const editData = ({ id, body }) => ({
  type: EDIT_DATA_FETCH,
  id,
  body,
});

export const deleteData = ({ id }) => ({
  type: DELETE_DATA_FETCH,
  id,
});

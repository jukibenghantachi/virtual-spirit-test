export const GET_DATA_FETCH = 'GET_DATA_FETCH';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const POST_DATA_FETCH = 'POST_DATA_FETCH';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';

export const getData = () => ({
  type: GET_DATA_FETCH,
});

export const postData = ({ body }) => ({
  type: POST_DATA_FETCH,
  body,
});

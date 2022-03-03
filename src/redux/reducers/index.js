import {
  DELETE_DATA_SUCCESS,
  EDIT_DATA_SUCCESS,
  GET_DATA_SUCCESS,
  POST_DATA_SUCCESS,
} from '../actions';

const initialState = {
  data: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      initialState.data.push(action.data);
      return { data: initialState.data };
    case POST_DATA_SUCCESS:
      initialState.data.unshift(action.data);
      return { data: initialState.data };
    case EDIT_DATA_SUCCESS:
      initialState.data.map((items, index) => {
        if (items.id === action.data.id) {
          initialState.data[index] = action.data;
        }
      });
      return { data: initialState.data };
    case DELETE_DATA_SUCCESS:
      initialState.data = initialState.data.filter((x) => x.id !== action.data);
      return { data: initialState.data };
    default:
      return state;
  }
}

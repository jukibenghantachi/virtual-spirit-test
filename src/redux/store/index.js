import {
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import crateSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducers from '../reducers';

const middleware = crateSagaMiddleware();
const reducer = combineReducers({ reducers });
export const store = createStore(reducer, applyMiddleware(middleware));
middleware.run(sagas);

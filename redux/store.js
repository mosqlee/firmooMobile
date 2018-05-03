import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMid';
import combineReducer from './reducers';

export const initStore = () => (
  createStore(combineReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware)))
);

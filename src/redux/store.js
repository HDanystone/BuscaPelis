import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware()));


export default store;
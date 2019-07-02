import { combineReducers } from 'redux';
import { uniansReducer } from '../unians';

const rootReducer = combineReducers({
  unians: uniansReducer
});

export default rootReducer;

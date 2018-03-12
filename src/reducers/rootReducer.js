import {combineReducers} from 'redux';
import app from './app';
import documents from './documents';

const rootReducer = combineReducers({
  app,
  documents
});

export default rootReducer;
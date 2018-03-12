import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function documents(state = initialState.documents, action) {
  switch (action.type) {
    case types.RETRIEVE_DOCUMENTS:
      return {
        ...state,
        collection: [ ...action.payload ]
      };
    case types.CREATE_DOCUMENT:
      return {
        ...state,
        collection: [ ...state.collection, action.payload ]
      };
    case types.SAVE_DOCUMENT:
      return state;
    case types.DELETE_DOCUMENT:
      return {
        ...state,
        collection: [ ...action.payload ]
      };
    case types.OPEN_DOCUMENT:
      return {
        ...state,
        selected: {
          ref: action.payload.ref
        }
      };
    default:
      return state;
  }
};

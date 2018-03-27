import * as types from '../actions/actionTypes';
import { createDocumentFromJSON } from '../actions/documents';
import defaultDocument from '../default.markdown';

const createContent = client => store => next => action => {
  let result;
  switch(action.type) {
      case types.RETRIEVE_DOCUMENTS:
        console.log(action.payload.length);
        if(action.payload.length === 0) {
            store.dispatch(createDocumentFromJSON(defaultDocument));
        }
        result = next(action);
        break;
      default:
        result = next(action);
    }
    return result
  };
  export default createContent;

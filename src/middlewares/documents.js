import * as types from '../actions/actionTypes';
import { openDocument } from '../actions/documents';

const documents = client => store => next => action => {
  let result;
  switch(action.type) {
      case types.RETRIEVE_DOCUMENTS:
        client.getDocuments().then((documents) => {
          // Add retrieved documents to the state
          // and send to the next middleware
          action.payload = [ ...documents ];
          result = next(action);
          // Dispatch an action to open the most recent document
          const ref = documents[documents.length -1].ref;
          store.dispatch(openDocument(ref));
        });
        break;
      case types.CREATE_DOCUMENT:
        client.createDocument().then((document) => {
          action.payload = { ...document };
          result = next(action);
          // Dispatch an action to open just created document
          const ref = document.ref;
          store.dispatch(openDocument(ref));
        });
        break;
      case types.DELETE_DOCUMENT:
        client.deleteDocument(action.payload.ref).then((documents) => {
          action.payload = [ ...documents ];
          result = next(action);
        });
        break;
      default:
        result = next(action);
    }
    return result
  };
  export default documents;

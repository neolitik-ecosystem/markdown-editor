import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import documents from '../middlewares/documents';
import createContent from '../middlewares/create-content';
import LocalStorageClient from '../services/local-storage-client';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      documents(new LocalStorageClient()),
      createContent()
    )
  );
}
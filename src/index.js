import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import { retrieveDocuments } from '../src/actions/documents';

// Creating the store
const store = configureStore();

// Adding Solid range icon so that all 'solid' icon will be available as a string
fontawesome.library.add(solid);

// Rendering root application
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));

// Launch first action in order to retrieve data
store.dispatch(retrieveDocuments());

 // Service worker
registerServiceWorker();

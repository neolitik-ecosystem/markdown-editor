import _ from 'lodash';
import { createSelector } from 'reselect';

// Return all documents
const getDocuments = state => state.documents.collection;

// Return sorted documents
const getSortedDocumentsByDateDesc = state => _.orderBy(getDocuments(state), [d => d.updatedAt], ['desc']);

/**
 * Selector to return all documents.
 * @param {Object} state - Redux state tree
 * @returns {Documents[]} Documents array
 */
export const getDocumentsSelector = createSelector(
    getSortedDocumentsByDateDesc,
    (documents) => (documents)
);

// Return selected document ref
const getSelectedDocumentRef = state => state.documents.selected.ref;

/**
 * Selector to return selected document.
 * @param {Object} state - Redux state tree
 * @returns {Document{}} Document object
 */
export const getSelectedDocumentSelector = createSelector(
    [getDocuments,getSelectedDocumentRef],
    (collection,ref) => {
        const selected = collection.find(document => document.ref === ref);
        return selected ? selected : { ref: null, content: '' }; 
    }   
);

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

// Return seleced document ref
const getSelectedDocumentRef = state => state.documents.selected.ref;

// Return selected document
const getSelectedDocument = state => {
    const selected = getSortedDocumentsByDateDesc(state).find(document => document.ref === getSelectedDocumentRef(state));
    return selected ? selected : { ref: null };
}

/**
 * Selector to return selected document.
 * @param {Object} state - Redux state tree
 * @returns {Document{}} Document object
 */
export const getSelectedDocumentSelector = createSelector(
    getSelectedDocument,
    (document) => (document)
);

import * as types from './actionTypes';

export function retrieveDocuments() {
  return {
    type: types.RETRIEVE_DOCUMENTS,
    payload: null
  };
}

export function createDocument() {
  return {
    type: types.CREATE_DOCUMENT,
    payload: null
  };
}

export function createDocumentFromJSON(payload) {
  return {
    type: types.CREATE_DOCUMENT_FROM_JSON,
    payload
  }; 
}

export function saveDocument(payload) {
  return {
    type: types.SAVE_DOCUMENT,
    payload
  };
}

export function openDocument(ref) {
  return {
    type: types.OPEN_DOCUMENT,
    payload: {
      ref
    }
  };
}

export function deleteDocument(ref) {
  return {
    type: types.DELETE_DOCUMENT,
    payload: {
      ref
    }
  };
}
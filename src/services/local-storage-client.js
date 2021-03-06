export default class LocalStorageClient {
    createDocument(source) {
        return new Promise((resolve, reject) => {

            // Get current documents
            const stored = localStorage.getItem('documents');
            const documents = JSON.parse(stored);

            // Create base document object
            let document = {};
            
            if(!source) {
                // Generate a ref
                const ref = '_' + Math.random().toString(36).substr(2, 9);
                // Date
                const date = new Date().toISOString();

                // New document
                document = {
                    ref,
                    title: 'Untitled',
                    content: '# GET STARTED',
                    createdAt: date,
                    updatedAt: date
                };
            } else {
                document = { ...source };
            }
            

            documents.push(document);
            localStorage.setItem('documents', JSON.stringify(documents));
            resolve(document);
        });
    }

    saveDocument(document)  {
        return new Promise((resolve, reject) => {
            this.getDocuments().then( (documents) => {
                const index = documents.findIndex((doc) => {
                    return doc.ref === document.ref;
                });

                // Date
                document.updatedAt = new Date().toISOString();;
                documents[index] = document;
                localStorage.setItem('documents', JSON.stringify(documents));
                resolve(document);
            })
        });
    }

    deleteDocument(ref) {
        return new Promise((resolve, reject) => {
            this.getDocuments().then( (documents) => {
                const index = documents.findIndex((document) => {
                    return document.ref === ref;
                })
                documents.splice(index, 1);
                localStorage.setItem('documents', JSON.stringify(documents));
                resolve(documents);
            })
        });
    }

    getDocuments() {
        return new Promise((resolve, reject) => {
            if( localStorage.getItem('documents') === null ) {
                localStorage.setItem('documents', JSON.stringify([]));
            }
            // Get current documents
            const stored = localStorage.getItem('documents');
            const documents = JSON.parse(stored);

            resolve(documents);
        })
    }
};

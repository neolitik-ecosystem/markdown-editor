import { connect } from 'react-redux';
import Explorer from './explorer.component';
import { openDocument } from '../../actions/documents';
import { getDocumentsSelector, getSelectedDocumentSelector } from '../../selectors/documents';

const mapStateToProps = (state) => ({
    documents: {
        selected: getSelectedDocumentSelector(state),
        collection: state.documents.collection
    },
    config: state.app.explorer
});

const mapDispatchToProps = dispatch => { 
    return {
        openDocument: (ref) => {
          dispatch(openDocument(ref));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);

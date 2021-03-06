import { connect } from 'react-redux';
import MarkdownEditorComponent from './editor.component';
import { deleteDocument, saveDocument } from '../../../actions/documents';
import { getSelectedDocumentSelector } from '../../../selectors/documents';

const mapStateToProps = (state) => ({
    document: getSelectedDocumentSelector(state),
    config: state.app.editor
});

const mapDispatchToProps = dispatch => {
    return {
        deleteDocument: (ref) => {
          dispatch(deleteDocument(ref));
        },
        saveDocument: (payload) => {
            dispatch(saveDocument(payload));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditorComponent);

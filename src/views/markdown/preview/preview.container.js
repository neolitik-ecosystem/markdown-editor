import { connect } from 'react-redux';
import PreviewComponent from './preview.component';
import { getSelectedDocumentSelector } from '../../../selectors/documents';

const mapStateToProps = (state) => ({
    document: getSelectedDocumentSelector(state)
});

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
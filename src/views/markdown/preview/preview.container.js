import { connect } from 'react-redux';
import PreviewComponent from './preview.component';
import { getSelectedDocumentSelector } from '../../../selectors/documents';

const mapStateToProps = (state) => ({
    document: getSelectedDocumentSelector(state),
    config: state.app.preview // TODO Should be in a selector
});

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
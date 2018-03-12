import { connect } from 'react-redux';
import ActionsMenu from './actions-menu.component';
import { createDocument } from '../../actions/documents';

const mapStateToProps = state => ({
    config: state.app.actionsMenu
});

const mapDispatchToProps = dispatch => { 
    return {
        createDocument: () => {
          dispatch(createDocument())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionsMenu);

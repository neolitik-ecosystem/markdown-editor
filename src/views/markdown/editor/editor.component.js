import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import EditorHeader from './editor-header.component';
import { Button } from 'neolitik-react-atomic-ui';

export default class MarkdownEditor extends Component {
    static propTypes = {
        document: PropTypes.object,
        config: PropTypes.object,
        deleteDocument: PropTypes.func
    }

    static defaultProps = {
        document: {},
        config: { settings: {} }
    }

    render() {
        const { document, config } = this.props;
        return (
            <section className='editor' id='editor'>
                <EditorHeader meta={ document } />
                <Button className='delete' size='large'
                    onClick={ () => this.props.deleteDocument(document.ref) }
                    theme={ { button: config.settings.defaultTheme.deleteButton } }>
                    <FontAwesomeIcon icon="trash-alt" />
                </Button>
            </section>
        )
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import EditorHeader from './editor-header.component';
import { Button, TextArea } from 'neolitik-react-atomic-ui';

export default class MarkdownEditor extends Component {
    static propTypes = {
        document: PropTypes.object,
        config: PropTypes.object,
        deleteDocument: PropTypes.func,
        saveDocument: PropTypes.func
    }

    static defaultProps = {
        document: { content: ''},
        config: { settings: {} }
    }

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            ref: null,
            content: ''
      };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.document) {
            this.setState({
                ref: nextProps.document.ref,
                content: nextProps.document.content,
              });
        }
    }

    onChange(ev) {
        // Controlled component
        this.setState({ content: ev.target.value });

        let document = this.props.document;
        document.content = ev.target.value;
        // Save to a global store
        this.props.saveDocument(document);
    }

    render() {
        const { document, config } = this.props;
        return (
            <section className='editor' id='editor'>
                <div className='editor-header'>
                    <Button className='delete' size='small'
                        onClick={ () => this.props.deleteDocument(document.ref) }
                        theme={ { button: config.settings.defaultTheme.deleteButton } }>
                        <FontAwesomeIcon icon="trash-alt" />
                    </Button>
                    <EditorHeader
                        meta={ document }
                        saveDocument={ this.props.saveDocument }
                        config={ config.settings.defaultTheme.editorHeader }
                        className='editor-header' />
                </div>
                <div className='editor-input'>
                    <TextArea style={ { height: '100%' } }
                        value={ this.state.content }
                        theme={ { textarea: config.settings.defaultTheme.textArea } }
                        onChange={ this.onChange } />
                </div>
            </section>
        )
    }
}

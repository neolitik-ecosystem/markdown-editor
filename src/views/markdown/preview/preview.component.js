import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownRenderer from 'react-markdown-renderer';

export default class MarkdownPreview extends Component {
    static propTypes = {
        document: PropTypes.object,
    }

    static defaultProps = {
        document: { content: ''}
    }

    render() {
        const { document } = this.props;
        return (
            <section className='preview' id='preview'>
                <div className='preview-rendered'>
                    <MarkdownRenderer
                        markdown={ document.content }
                        options={ { preset: 'full' } } 
                        id='wrapper' />
                </div>
            </section>
        )
    }
}

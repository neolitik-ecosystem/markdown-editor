import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExplorerDocument from './explorer-document.component';

export default class Explorer extends Component {
    static propTypes = {
        documents: PropTypes.object.isRequired,
        config: PropTypes.object.isRequired,
        openDocument: PropTypes.func.isRequired
    }

    static defaultProps = {
        documents: {
            selected: {
                ref: null
            },
            collection: []
        },
        config: { settings: {} }
    }

    constructor(props) {
        super(props);
        this.selectDocument = this.selectDocument.bind(this);
    }

    selectDocument(ref) {
        this.props.openDocument(ref);
    }

    render() {
        const { documents, config } = this.props;
        const { collection } = documents
        console.log(documents);
        return (
            <section className='explorer' id='explorer'>
                <nav>
                    <ul>
                    { collection.map((doc) => 
                           <ExplorerDocument
                                onClick={ this.selectDocument }
                                key={ doc.ref }
                                document={ doc }
                                config={ config }
                                selected={ documents.selected.ref === doc.ref }
                            /> 
                        )
                    }
                    </ul>
                </nav>
            </section>
        )
    }
}

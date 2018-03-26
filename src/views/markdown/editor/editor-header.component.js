import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Text, Input, DefaultTheme } from 'neolitik-react-atomic-ui';

export default class EditorHeader extends Component {
    static propTypes = {
        meta: PropTypes.object,
        saveDocument: PropTypes.func,
        config: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.state = {
                ref: null,
                title: ''
          };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.meta) {
            this.setState({
                ref: nextProps.meta.ref,
                title: nextProps.meta.title,
              });
        }
    }

    onChange (ev){
        // Controlled component
        this.setState({ title: ev.target.value });

        let document = this.props.meta;
        document.title = ev.target.value;
        // Save to a global store
        this.props.saveDocument(document);
    }

    /** TODO: Create a date component within the library (small, medium, large) */
    render() {
        const { meta, config } = this.props;
        const { input, text } = config;
        return (
            <div>
                { this.state.ref !== null &&
                <div>
                    <Input
                        type='text'
                        value={ this.state.title }
                        onChange={ this.onChange }
                        theme={ { input } }
                        size={ DefaultTheme.sizes.TITLE } 
                        style={ { padding: '0' } }/>
                    <div>
                        <Text size={ DefaultTheme.sizes.SMALL } style={ { lineHeight: '0' } } theme={ { text } }>
                            <span>Created <Moment fromNow>
                                    { meta.createdAt }
                                </Moment>
                            </span>
                        </Text>
                    </div>
                    <div>
                        <Text size={ DefaultTheme.sizes.SMALL } style={ { lineHeight: '0' } } theme={ { text } }>
                            <span>Updated <Moment fromNow>
                                    { meta.updatedAt }
                                </Moment>
                            </span>
                        </Text>
                    </div>
                </div>
                }
            </div>
        )
    }
}

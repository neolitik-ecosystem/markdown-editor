import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { H1 } from 'neolitik-react-atomic-ui';

export default class EditorHeader extends Component {
    static propTypes = {
        meta: PropTypes.object,
        saveDocument: PropTypes.func
    }

    onChange (ev){
        console.log(this.props.meta)
        let document = this.props.meta;
        document.title = ev.target.value;
        this.props.saveDocument(document);
        console.log(ev.target.value + '  :: ');
    }

    render() {
        const { meta } = this.props;
        return (
            <div>
                <input type='text' defaultValue={ meta.title } onChange={ ev => { this.onChange(ev) } } />
                <div>
                    <span>Created </span>
                    <Moment fromNow>
                        { meta.createdAt }
                    </Moment>
                </div>
                <div>
                    <span>Updated </span>
                    <Moment fromNow>
                        { meta.updatedAt }
                    </Moment>
                </div>
            </div>
        )
    }
}

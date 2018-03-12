import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { H1 } from 'neolitik-react-atomic-ui';

export default class EditorHeader extends Component {
    static propTypes = {
        meta: PropTypes.object
    }

    render() {
        const { meta } = this.props;
        return (
            <div>
                <H1>{ meta.title }</H1>
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

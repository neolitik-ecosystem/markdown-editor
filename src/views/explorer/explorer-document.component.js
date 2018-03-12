import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { ListItem, H2 } from 'neolitik-react-atomic-ui';

export default class ExplorerDocument extends Component {
    static propTypes = {
        document: PropTypes.object,
        config: PropTypes.object,
        onClick: PropTypes.func,
        selected: PropTypes.bool
    }

    static defaultProps = {
        document: {},
        config: { settings: {} },
        selected: false
    }

    componentWillMount() {
        this.setState({ focus: false });
    }

    toggleDelete(value, event) {
        event.preventDefault();
        this.setState({ focus: value });
    }

    render() {
        const { settings } = this.props.config;
        const { document, selected } = this.props;
        return (
            <ListItem
                onMouseOver={ (ev) => this.toggleDelete(true, ev) }
                onMouseOut={ (ev) => this.toggleDelete(false, ev) }
                onClick={ () => this.props.onClick(document.ref)}
                size={ settings.size }
                theme={ settings.defaultTheme }
                selected={ selected }
            >
                <span>
                    <H2>{ document.title }</H2>
                    <span>
                        <Moment fromNow>
                            { document.createdAt }
                        </Moment>
                    </span>
                </span>
            </ListItem>
        )
    }
}

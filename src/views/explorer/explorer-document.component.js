import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { ListItem, Text } from 'neolitik-react-atomic-ui';

export default class ExplorerDocument extends Component {
    static propTypes = {
        document: PropTypes.object,
        config: PropTypes.object,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        index: PropTypes.number
    }

    static defaultProps = {
        document: {},
        config: { settings: {} },
        selected: false
    }

    componentWillMount() {
        this.setState({ focus: false });
    }

    componentDidMount() {
        const { document, index } = this.props;
        if(index === 0) {
            this.props.onClick(document.ref)
        }
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
                size={ settings.listItemSize }
                theme={ settings.defaultTheme }
                selected={ selected }
            >
                <div>
                    <Text size={ settings.titleSize } theme={ { text: settings.defaultTheme.title } } style={ { lineHeight: '0' } }>{ document.title }</Text>
                </div>
                <div className='date'>
                    <Text size={ settings.dateSize } theme={ { text: settings.defaultTheme.date } } style={ { lineHeight: '0' } }>
                        <Moment fromNow>
                            { document.updatedAt }
                        </Moment>
                    </Text>
                </div>
            </ListItem>
        )
    }
}

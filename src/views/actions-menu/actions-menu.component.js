import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'neolitik-react-atomic-ui';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ActionsMenu extends Component {
    static propTypes = {
        config: PropTypes.object.isRequired,
        version: PropTypes.string,
        createDocument: PropTypes.func
    }

    static defaultProps = {
        config: { settings: {}, menuItems: [] },
        version: '0.0.0'
    }

    render() {
        const { settings } = this.props.config;
        const { version } = this.props;
        return (
            <section className='menu' id='menu'>
                <div className='logo'>
                    <span>N#</span>
                </div>
                <div className='version'>
                    <span>{ version }</span>
                </div>
                <nav>
                    <ul>
                        <ListItem
                            onClick={ () => this.props.createDocument() }
                            key='file'
                            size={ settings.size }
                            center={ settings.center }
                            theme={ settings.defaultTheme }
                            >
                            <FontAwesomeIcon icon='file' />
                        </ListItem> 
                    </ul>
                </nav>
            </section>
        )
    }
};

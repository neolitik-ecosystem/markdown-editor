import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'neolitik-react-atomic-ui';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ActionsMenu extends Component {
    static propTypes = {
        config: PropTypes.object.isRequired,
        createDocument: PropTypes.func
    }

    static defaultProps = {
        config: { settings: {}, menuItems: [] },
    }

    render() {
        const { settings } = this.props.config;
        return (
            <section className='menu' id='menu'>
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

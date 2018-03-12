import { DefaultTheme } from 'neolitik-react-atomic-ui';

export default {
    documents: {
        selected: {
            ref: null,
        },
        collection: []
    },
    app: {
        actionsMenu: {
            settings: {
                size: DefaultTheme.sizes.LARGE,
                center: true,
                defaultTheme: {
                    listItem: {
                        color: DefaultTheme.colors.TITLE,
                        background: 'none',
                        backgroundHover: DefaultTheme.colors.HEADER,
                        border: 'none',
                        borderRadius: '0' /* TODO Use theme instead */
                    }
                }
            }
        },
        explorer: {
            settings: {
                size: DefaultTheme.sizes.SMALL,
                center: false,
                defaultTheme: {
                    listItem: {
                        color: DefaultTheme.colors.PRIMARY,
                        background: 'none',
                        backgroundHover: DefaultTheme.colors.HIGHLIGHT,
                        backgroundSelected: DefaultTheme.colors.HIGHLIGHT,
                        border: 'none',
                        borderRadius: '5px'
                    }
                }
            }
        },
        editor: {
            settings: {
                defaultTheme: {
                    listItem: {
                        color: DefaultTheme.colors.PRIMARY,
                        background: 'none',
                        backgroundHover: DefaultTheme.colors.HIGHLIGHT,
                        border: 'none',
                        borderRadius: '5px'
                    },
                    deleteButton: {
                        background: DefaultTheme.colors.DANGER,
                        border: 'none',
                        borderRadius: '5px' 
                    }
                }
            }
        }
    }
};
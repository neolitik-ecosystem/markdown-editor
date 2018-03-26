import { DefaultTheme } from 'neolitik-react-atomic-ui';

export default {
    documents: {
        selected: {
            ref: null
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
                listItemSize: DefaultTheme.sizes.SMALL,
                titleSize: DefaultTheme.sizes.MEDIUM,
                dateSize: DefaultTheme.sizes.SMALL,
                center: false,
                defaultTheme: {
                    listItem: {
                        color: DefaultTheme.colors.PRIMARY,
                        background: 'none',
                        backgroundHover: DefaultTheme.colors.HIGHLIGHT,
                        backgroundSelected: DefaultTheme.colors.HIGHLIGHT,
                        border: 'none',
                        borderRadius: '5px'
                    },
                    title: {
                        color: DefaultTheme.colors.DARK,
                        background: 'none',
                        border: 'none',
                        borderRadius: '0'
                    },
                    date: {
                        color: DefaultTheme.colors.DARK,
                        background: 'none',
                        border: 'none',
                        borderRadius: '0'
                    }
                }
            }
        },
        editor: {
            settings: {
                defaultTheme: {
                    editorHeader: {
                        input: {
                            color: DefaultTheme.colors.PRIMARY,
                            background: 'none',
                            border: 'none',
                            borderRadius: '0'
                        },
                        text: {
                            color: DefaultTheme.colors.DARK,
                            background: 'none',
                            border: 'none',
                            borderRadius: '0'
                        }
                    },
                    deleteButton: {
                        background: DefaultTheme.colors.DANGER,
                        border: 'none',
                        borderRadius: '5px' 
                    },
                    textArea: {
                        color: DefaultTheme.colors.PRIMARY,
                        background: 'none',
                        border: 'none',
                        borderRadius: '0',
                        padding: '20px 0 0 0',
                        fontSize: '14px'
                    }
                }
            }
        }
    }
};
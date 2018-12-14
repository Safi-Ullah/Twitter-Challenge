import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
export const blue = '#4676e0';

export const theme = createMuiTheme({
    palette: {
        type: localStorage.getItem('theme') || 'light',
    },
    typography: { useNextVariants: true },
});

export const menuStyles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    menuItem: {
        margin: 0
    },
    noRightPadding: {
        paddingRight: 0
    }
};

export const cardStyles = ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export const paperStyles = ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
})

export const dashboardStyles = ({
    root: {
      flexGrow: 1,
      marginTop: '100px',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

export const drawerStyles = ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    toolbar: theme.mixins.toolbar,
});

export const getDraggableListStyle = isDraggingOver => ({
    display: 'flex',
    padding: 40,
    overflow: 'auto',
});

export const getDraggableItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: 40,
    margin: `0 16px 0 0`,

    ...draggableStyle,
});

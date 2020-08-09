import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React from 'react';
import "./side-menu.scss"


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuIcon: {
        color: 'white'
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SideMenu()
{
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) =>
    {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
        {
            return;
        }
        setState({...state, [anchor]: open});
    };

    //Defines Side Nav elements
    const list = (anchor: Anchor) => (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
             role="presentation"
             onClick={toggleDrawer(anchor, false)}
             onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    //Renders side-nav icon and onClick methods
    return (
        <div>
            {(['left'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton aria-label="delete" onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon className={classes.menuIcon}/>
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

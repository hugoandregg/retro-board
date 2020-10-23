import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Input } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';


// import Input from './Input'

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      width: 240,
    },
    toolbar: {
      position: 'absolute',
      right: 0,
      top: -5
    },
    drawerHeader: {
      display: 'flex'
    },
    drawerTitle: {
      marginTop: '10px',
      fontSize: '1.5rem'
    },
    drawerInputWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawerInput: {
      margin: '10px',
      paddingLeft: '5px'
    }
  }));

const DrawerComponent = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        <>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <h1 className={classes.drawerTitle}>Action Items</h1>
              </div>
              <Divider />
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <div className={classes.drawerInputWrapper}>
                <Input className={classes.drawerInput} placeholder="Insert new action here" />
                <IconButton color="primary" aria-label="add new action item">
                  <AddBoxIcon />
                </IconButton>
              </div>
            </Drawer>
        </>
    )
}

export default DrawerComponent;

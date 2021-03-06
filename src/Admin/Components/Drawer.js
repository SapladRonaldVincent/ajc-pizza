import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GroupIcon from '@material-ui/icons/Group';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import './styles.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    width: drawerWidth,
  },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap 
              aria-label="account of current user"
              aria-controls="menu-appbar"
              className= {classes.title}
          >
            AJC HOMEMADE PIZZA
          </Typography>
          <div>
            <Typography noWrap>
              Welcome, Admin
            </Typography>
          </div>
          <div>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/'>  
                <ListItem button key='Home'> 
                  <ListItemIcon><HomeIcon/> 
                  </ListItemIcon> 
                  <ListItemText primary='Home' /> 
                </ListItem>  
            </Link> 
          <Link to='/Menu'> 
                <ListItem button key='Menu'> 
                  <ListItemIcon><MenuBookIcon/> 
                  </ListItemIcon> 
                  <ListItemText primary='Menu' /> 
                </ListItem> 
          </Link>
          <Link to='/Orders'> 
                <ListItem button key='Orders'> 
                  <ListItemIcon><ShoppingCartIcon/> 
                  </ListItemIcon> 
                  <ListItemText primary='Orders' /> 
                </ListItem> 
           </Link>  
           <Link to='/Notification'> 
                <ListItem button key='Notification'> 
                  <ListItemIcon><NotificationsIcon/>
                  </ListItemIcon> 
                  <ListItemText primary='Notifications' /> 
                </ListItem> 
           </Link>
           <Divider/>
           <Link to='/Admin'> 
                <ListItem button key='Admin'> 
                  <ListItemIcon><SupervisedUserCircleIcon/>
                  </ListItemIcon> 
                  <ListItemText primary='Admin' /> 
                </ListItem> 
           </Link>
           <Link to='/Staff'> 
                <ListItem button key='Staff'> 
                  <ListItemIcon><GroupIcon/>
                  </ListItemIcon> 
                  <ListItemText primary='Staff' /> 
                </ListItem> 
           </Link>
           <Link to='/Users'> 
                <ListItem button key='Users'> 
                  <ListItemIcon><PeopleOutlineIcon/>
                  </ListItemIcon> 
                  <ListItemText primary='Users' /> 
                </ListItem> 
           </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      
      </main>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import SettingsIcon from '@material-ui/icons/Settings';
import CameraIcon from '@material-ui/icons/Camera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import HighlightIcon from '@material-ui/icons/Highlight';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link} from 'react-router-dom';
import Switch from '@material-ui/core/Switch'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Webcam from "react-webcam";
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  roota: {
    minWidth: 200,
    
  },
  list: {
    width: '100%',
    maxWidth: 1100,
  },
  gri:{
    flexGrow: 1,
    //backgroundColor: '#e8f5e9'
  },
  bullet: {
    spacing: '{10}',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  listItemText:{
    fontSize:'2em',//Insert your required size
  },
   CameraText:{
    fontSize:'1.5em',//Insert your required size
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  toolbar: {
    minHeight: 100,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      color : 'secondary'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function ResponsiveDrawer_live(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography  align = 'inherit' >
          SMART MONITORING CAMERA 
        </Typography>
      <Divider />
      <List>
        <Link to = '/menuBar' style={{color: '#000', textDecoration: 'none' }} >
          
         <ListItem button >
            <ListItemIcon><CameraIcon /></ListItemIcon> 
            <ListItemText primary= 'Status' />
          </ListItem>
        </Link>
        <Link to = "/menuBar_live" style={{ color: '#000',textDecoration: 'none' }} >        
              <ListItem button >
                <ListItemIcon><VideocamIcon /></ListItemIcon> 
                <ListItemText primary= 'Live Camera' />
              </ListItem>
       </Link>
       <Link to = '/configure_camera' style={{ color: '#000',textDecoration: 'none' }} >
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon> 
            <ListItemText primary= 'Camera Configuration' />
          </ListItem>
          </Link>
          </List>
        
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Home Automation UI
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid item xs ={0} sm ={1} />
        <Grid item xs={12} sm= {10}>
            <Card className={classes.roota}>
        
            <CardMedia>
              <Box display='flex' justifyContent = 'center' marginTop = {2}>
                <Box>                
                  <Webcam 
                    height={500}
                    width={1000}/>
                </Box>
              </Box>
            </CardMedia>
            </Card >
        </Grid>
        <Grid item xs ={0} sm ={1} />
      </main>
    </div>
  );
}

ResponsiveDrawer_live.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer_live;

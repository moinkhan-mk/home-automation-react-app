import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
//Icon Libraries
import {Link} from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
//import {humidityIcon} from '@iconify/icons-wi/humidity'; 
import thermometerIcon from '@iconify/icons-mdi/thermometer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HighlightIcon from '@material-ui/icons/Highlight';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { purple , teal, grey ,blue, red} from '@material-ui/core/colors';
import {useContext} from 'react'
import { GlobalContext } from '../context/GobalState'
import axios from 'axios'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main:teal[800]
    }
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    
  },
  list: {
    width: '100%',
    maxWidth: 760,
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
  }
});

export const CameraConfig = () => {
  const data = useContext(GlobalContext)

 const postData = async () => {
  try {
      console.log(data.state)
      const resp = await axios.post('/setCurrentStatus', data.state)
       console.log(resp)
      }
  catch (err) {
     console.log(err)
    }
  }

  const classes = useStyles();
  return (   
     <Grid container className = {classes.gri} spacing={2} color = 'seconday' >
     <Grid item xs = {12}>
     <MuiThemeProvider theme={theme}>
       <AppBar position="dynamic" color = 'secondary'>
              <Toolbar  className = {classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <HomeIcon fontSize = 'large'/>  
                </IconButton>
                <Typography variant="h4" color="inherit">
                    Home Automation UI  
                </Typography>
              </Toolbar>
       </AppBar>
      </MuiThemeProvider>
      </Grid>
      <CssBaseline />
       <Grid item xs ={0} sm ={3} />
        <Grid item xs={12} sm= {6}>
            <Card className={classes.root}>
                <CardContent>
                    <ListItemText id="switch-list-label-wifi" classes={{primary:classes.CameraText}}  primary="Camera Configuration" />
                </CardContent>
                <CardActions>
                <List  className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <ToysIcon/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-wifi" classes={{primary:classes.CameraText}} primary="Ceilling Fan" />
                        <ListItemSecondaryAction>
                            <Switch color = 'primary'  onChange={(e) => data.updateBtn_1(e.target.checked)} 
                             checked = {data.state.Btn1_status}/>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                             <HighlightIcon color = 'primary'  />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth"classes={{primary:classes.CameraText}} primary="Bed Light" />
                        <ListItemSecondaryAction>
                         <Switch color = 'primary' onChange={(e) => data.updateBtn_2(e.target.checked)} 
                          checked = {data.state.Btn2_status} />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AcUnitIcon color = 'secondary' />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth"classes={{primary:classes.CameraText}} primary="AC " />
                        <ListItemSecondaryAction>
                             <Switch color = 'primary' onChange={(e) => data.updateBtn_3(e.target.checked)}
                            checked = {data.state.Btn3_status} />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>  
                </CardActions> 
                <CardActions >              
                 <Grid container item  spacing = {2} >
                  <Grid item xs ={4}>
                        <Button fullWidth variant="contained" color="primary" size = 'large' 
                        onClick = { postData } >
                              SEND DATA
                        </Button>
                  </Grid>
                  <Grid item xs ={4}>
                        <Button fullWidth variant="contained" color="primary" size = 'large' 
                        onClick = {data.setPiData}
                        >
                              PI Data Set
                        </Button>
                  </Grid>
                  <Grid item xs ={4}>
                     <Link to = "/livecamera"> 
                        <Button fullWidth variant="contained" color="primary" size = 'large' >
                              Live Demo
                        </Button>
                     </Link>
                  </Grid>
                </Grid>
                </CardActions>
      
            </Card>  
        </Grid>
        <Grid item xs ={0} sm ={3} />
        <Grid item xs ={0} sm ={3} />
       
        <Grid item xs={12} sm={3} >
                <Card className={classes.root}>
                    <CardContent> 
                      <List  className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                              <Icon icon={thermometerIcon} width = {25}/>
                            </ListItemIcon>
                            <ListItemText   primary="Inside Temperature" />
                        </ListItem>
                        <ListItem>
                           <ListItemText   classes={{primary:classes.listItemText}}  primary= '20 &deg;C' />
                        </ListItem>
                    </List>
                    </CardContent>
                </Card>  
        </Grid>
        <Grid item xs={12} sm={3} >
        
        <Card className={classes.root}>
                    <CardContent> 
                      <List  className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                            <Icon icon={thermometerIcon} width = {25}/>
                            </ListItemIcon>
                            <ListItemText   primary="Inside Humidity" />
                        </ListItem>
                        <ListItem>
                           <ListItemText   classes={{primary:classes.listItemText}}  primary= '20%' />
                        </ListItem>
                    </List>
                    </CardContent>
                </Card>  
            
          </Grid>
          <Grid item xs={12} sm={3} />
         
     </Grid>

  );

}

export default CameraConfig;




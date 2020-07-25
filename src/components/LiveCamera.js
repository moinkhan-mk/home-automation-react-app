import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Webcam from "react-webcam";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { purple , teal, grey ,blue, red} from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
 
const theme = createMuiTheme({
  palette: {
    secondary: {
      main:teal[800]
    }
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  }, toolbar: {
    minHeight: 100,
    
  }
}));

export const LiveCamera = () => {
  const classes = useStyles();

  return (
    <div >
     <Grid container  spacing={2} >
       <Grid item xs = {12}>
        <MuiThemeProvider theme = {theme}>       <AppBar position="dynamic" color = 'secondary'>
              <Toolbar className = {classes.toolbar} >
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon fontSize = 'large' /> 
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
          <Card>
            <CardMedia>
              <Box display='flex' justifyContent = 'center' marginTop = {2}>
                <Box>                
                  <Webcam 
                    height={500}
                    width={1000}/>
                </Box>
              </Box>
            </CardMedia>
            </Card>
        </Grid>
    <Grid item xs ={0} sm ={3} />
    <Grid item xs ={0} sm ={3} />
        <Grid item xs={12} sm= {6}>
          <Link to = "/">        
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
             Exit
            </Button>
            </Link>
       <Grid item xs ={0} sm ={3} />
       </Grid>
      </Grid>
      
    </div>
  );
}

import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple , teal, grey, red} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const theme = createMuiTheme({
  palette: {
    primary:{
      main:teal[800]
    }
    ,
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(4),
  },
}));

export const Testing = () =>   {

  const classes = useStyles();
  return (
    
    <div>  
         <MuiThemeProvider theme={theme}>
           <Grid container  >
            <Grid item  xs ={12}>        
            <AppBar position="dynamic" >
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />  
                </IconButton>
                <Typography variant="h5" color="inherit">
                    Home Automation
                </Typography>
              </Toolbar>
      </AppBar>
          </Grid>

       </Grid>
    </MuiThemeProvider>
    </div>

      );
    }
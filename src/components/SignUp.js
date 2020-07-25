import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useContext, useState} from 'react'
import { GlobalContext } from '../context/GobalState'

import { createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { purple , teal, grey ,blue, red} from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
 


const theme = createMuiTheme({
  palette: {
    secondary: {
      main:teal[800]
    }
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }, 
  toolbar: {
    minHeight: 100,
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
}));

export const SignUp = () => {
  const classes = useStyles();
  const data = useContext(GlobalContext)
  const[val,setVal] = useState()
  console.log(data.state)

  return (
    <div>  
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName" 
                label="First Name"
                autoFocus
               
                onChange={(e) => data.updateFirstName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => data.updateLastName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => data. updateEmail(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => data.updatePassword(e.target.value) }
                
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
         <Link to = "/"> <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Account
          </Button> </Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to = "/" >
                {"Already have an account? Sign in"}
              </Link>
              
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}
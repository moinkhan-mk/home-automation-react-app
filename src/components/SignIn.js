import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { palette } from '@material-ui/system';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import {useContext} from 'react'
import { GlobalContext } from '../context/GobalState'
import { createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { purple , teal, grey ,blue, red} from '@material-ui/core/colors';

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
    marginTop: theme.spacing(1),
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

export const SignIn = () => {
  const classes = useStyles();
  const data = useContext(GlobalContext)
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
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" 
            margin="normal" 
            required fullWidth
            id="email"
            label="Email Address"
            name="email"
            value = {data.state.email}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {data.state.password }
          />
          <Link to="/menuBar">
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
         </Link>
        </form>
      </div>
    </Container>
    </div>
  
  );
}


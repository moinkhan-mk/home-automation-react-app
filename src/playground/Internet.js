




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,   
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form:{
    margin: theme.spacing(30),
    width: '25ch',
  }
}));

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
      width: '30ch',
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const classe = useStyle();

  return (
      <Grid container direction = 'column' spacing={3}>
        <Grid item xs={12}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} align = 'center'>
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
        <Grid item container direction = 'row'>
            <Grid xs={2}/>
            <Grid xs={8}>
                <Card>
                    <CardContent>
                      <PersonIcon fontSize="large"  /> 
                      <LockOutlinedIcon />
                      <CssBaseline />
                      <form className={classe.root} noValidate autoComplete="off">
                        
                        <TextField id="outlined-basic" label="User" variant="outlined" /> <br/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" /> <br/>
                        <Button variant="contained" color="secondary"> Sign In</Button>
                      </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={2}/>
          
        </Grid>
      </Grid>
  );
}





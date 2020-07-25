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
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import fanIcon from '@iconify/icons-mdi/fan';
import HighlightIcon from '@material-ui/icons/Highlight';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  list: {
    width: '100%',
    maxWidth: 650,
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
});

const CameraConfiq = () => {

  const classes = useStyles();
  
  
  return (
   <container > 
     <Grid item container direction = 'row' >
        <Grid xs={0} sm={1} />
        <Grid xs={12} sm= {5}>
            <Box m = {1}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                            Camera Configuration
                    </Typography>
                </CardContent>
                <CardActions>
                <List subheader={<ListSubheader>Camera Configuration</ListSubheader>} className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <ToysIcon/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-wifi" primary="Ceilling Fan" />
                        <ListItemSecondaryAction>
                            <Switch />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                             <HighlightIcon  />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Bed Light" />
                        <ListItemSecondaryAction>
                         <Switch/>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AcUnitIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="AC " />
                        <ListItemSecondaryAction>
                             <Switch/>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                   
                    
                </CardActions>
            </Card>  
            </Box>    
        </Grid>
        <Grid xs={12} sm= {5}>
         <Box m = {1}>
            <Card className={classes.root}>
                <CardContent>
                </CardContent>
            </Card>  
            </Box>   
        </Grid>
        <Grid xs={0} sm={1} />

        <Grid xs={0} sm={1} /> 
        <Grid xs={0} sm={2.5} >
             <Box m = {1}>
                <Card className={classes.root}>
                    <CardContent>  </CardContent>
                 </Card>  
            </Box> 
        </Grid>

        <Grid xs={0} sm={2.5} >
        <Box m = {1}>
            <Card className={classes.root}>
                <CardContent>
                </CardContent>
            </Card>  
            </Box> 
          </Grid>

        
     </Grid>
 
</container>
  );

}


export default CameraConfiq;




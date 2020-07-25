<Box  display="flex" justifyContent="center"  marginTop = {5}  bgcolor="background.paper"> 
<Box>
<Card>
    <CardMedia >
       <Webcam />
    </CardMedia>
    <CardActions>
     <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        ><Link to = "/">
          Exit
          </Link>
        </Button> 
    </CardActions>
</Card>
</Box>
</Box  >
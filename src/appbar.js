import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ()=> {
  const classes = useStyles();

  return (


    <div className={classes.root}>
      <AppBar  color="transparent" elevation={0} position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Yo Weather
          </Typography>
          <Link to="/fourdays">
          <Button color="inherit">4 days forecast</Button>
          </Link>
           <Link to="/fourteendays">
            <Button color="inherit">16 days forecast</Button>
            </Link>
              <Button color="inherit">30 days forecast</Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}
export default ButtonAppBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import styles from "./HeaderStyle.js";

const useStyles = makeStyles(styles)

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            5tars Movies
          </Typography>
          <Fab variant="extended" size="small" color="secondary">              
            My Favorites
            <StarIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
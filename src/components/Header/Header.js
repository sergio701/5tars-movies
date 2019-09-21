import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LogoSVG from "components/LogoSVG/LogoSVG";
import styles from "./HeaderStyle.js";

const useStyles = makeStyles(styles)

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <a href="/" className={classes.link}>
              <LogoSVG  className={classes.logo}/>
            </a> 
          </div>
          <a href="/MyFavorites" className={classes.link}>
            <Fab variant="extended" size="small" color="secondary">              
              My Favorites
              <FavoriteIcon />
            </Fab>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
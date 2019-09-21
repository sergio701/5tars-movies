import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from "./FooterStyle.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles)

const Footer = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography variant='caption'>
        Sergio Ramirez G - sergio701@gmail.com
      </Typography>
    </div> 
  )};

export default Footer;
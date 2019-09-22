import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorder from '@material-ui/icons/StarBorder';
import { amber } from '@material-ui/core/colors';
import styles from "./ScoreStyle.js";

const useStyles = makeStyles(styles);

const Score = ({ score }) => {
  const classes = useStyles();
  score = Math.ceil(score)/2;;
  const integer = Math.floor(score);
  const decimal = Math.ceil(score % 1);
  let gap = 5 - integer - decimal;

  return (
    <div className={classes.root}>
      { integer ? 
        Array(integer).fill().map((_, i) => (
          <StarIcon htmlColor={amber[600]} className={classes.icon} key={i}/>
        )) : null
      }
      {
        decimal ? 
          <StarHalfIcon htmlColor={amber[600]} className={classes.icon} />
          : null        
      }
      { gap ? 
        Array(gap).fill().map((_, i) => (
          <StarBorder htmlColor={amber[600]} className={classes.icon} key={i}/>
        )) : null
      }      
    </div>
  );
}

export  default Score;
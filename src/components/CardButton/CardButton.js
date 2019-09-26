import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import styles from "./CardButtonStyle.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CardButton = ({
  help,
  icon,
  color,
  active,
  onTurnOn,
  onTurnOff
}) => {
  const classes = useStyles();

  const colorIcon = React.cloneElement(icon, {
    htmlColor: active ? color : null
  });
  
  return (
    <Tooltip title={help}>
      <IconButton onClick={ e => {
          if(active)
            onTurnOff();
          else
            onTurnOn();                  
          }}>
        {colorIcon}
      </IconButton>
    </Tooltip>
  )};

export default CardButton;
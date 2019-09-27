import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const CardButton = ({
  help,
  icon,
  color,
  active,
  onTurnOn,
  onTurnOff
}) => {
  const colorIcon = icon ? React.cloneElement(icon, {
    htmlColor: active ? color : null
  }) : null;
  
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
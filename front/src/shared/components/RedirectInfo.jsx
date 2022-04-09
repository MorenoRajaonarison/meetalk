import React from 'react';
import {Typography} from "@mui/material";
import {styled} from "@mui/system";

const RedirectText = styled('span')({
  color:'#00aff4',
  fontWeight: 500,
  cursor: 'pointer',

})
const RedirectInfo = ({text, redirectText, style, redirectHandler}) => {
  return (
    <Typography
      sx={{color: '#72767d'}}
      style={style?style: {}}
      variant='subtitle2'
    >
      {text}
      <RedirectText onClick={redirectHandler}>
        {redirectText}
      </RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
import React from 'react'
import Button from '@mui/material/Button'

const CustomPrimaryButton = ({label, style, disabled, onClick}) => {
  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#5865f2',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px'
      }}
      disabled={disabled}
      onClick={onClick}
      style = {style ? style: {}}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
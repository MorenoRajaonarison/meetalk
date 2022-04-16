import React from 'react'
import Box from "@mui/material/Box"
import {FiberManualRecordRounded} from "@mui/icons-material";

const OnlineIndicator = () => {
  return (
    <Box sx={{
      color: '#3ba55d',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: '5px'
    }}>
      <FiberManualRecordRounded/>
    </Box>
  )
}

export default OnlineIndicator

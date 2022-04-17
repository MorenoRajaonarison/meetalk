import React from 'react'
import {Clear,Check} from "@mui/icons-material"
import {IconButton, Box} from "@mui/material"

const InvitationDecision = ({disabled, accept, reject}) => {
  return <Box sx={{display: 'flex'}}>
      <IconButton
        style={{color: '#fff'}}
        disabled={disabled}
        onClick={accept}
      >
        <Check/>
      </IconButton>
    <IconButton
      style={{color: '#fff'}}
      disabled={disabled}
      onClick={reject}
    >
      <Clear/>
    </IconButton>
    </Box>
}

export default InvitationDecision

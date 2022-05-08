import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {Close} from "@mui/icons-material"

const CloseRoomBtn = () => {
  const [isOpen, setIsOpen] = useState(true)
  const rooToggle = () => setIsOpen(!isOpen)
  return (
    <IconButton onClick={rooToggle} style={{color: '#fff'}}>
      <Close/>
    </IconButton>
  )
}

export default CloseRoomBtn

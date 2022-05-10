import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {Close} from "@mui/icons-material"

const CloseRoomBtn = () => {
  const [isOpen, setIsOpen] = useState(true)
  const roomToggle = () => setIsOpen(!isOpen)
  return (
    <IconButton onClick={roomToggle} style={{color: '#fff'}}>
      <Close/>
    </IconButton>
  )
}

export default CloseRoomBtn

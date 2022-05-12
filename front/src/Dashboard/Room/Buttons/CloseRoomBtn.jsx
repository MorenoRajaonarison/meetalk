import React from 'react'
import {IconButton} from '@mui/material'
import {Close} from "@mui/icons-material"
import * as roomHandler from '../../../Rtc/roomHandler'

const CloseRoomBtn = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom()
  }
  return (
    <IconButton onClick={handleLeaveRoom} style={{color: '#fff'}}>
      <Close/>
    </IconButton>
  )
}

export default CloseRoomBtn

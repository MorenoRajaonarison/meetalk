import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {MicNone, MicOff} from "@mui/icons-material"

const MicroBtn = ({localStream}) => {
  const [microEnable, setMicroEnable] = useState(true)
  const microToggle = () => {
    localStream.getAudioTracks()[0].enabled = !microEnable
    setMicroEnable(!microEnable)
  }
  return (
    <IconButton onClick={microToggle} style={{color: '#fff'}}>
      {microEnable ? <MicNone/> : <MicOff/>}
    </IconButton>
  )
}

export default MicroBtn


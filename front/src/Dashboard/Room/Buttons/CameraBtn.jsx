import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {VideoCallOutlined, VideocamOffOutlined} from "@mui/icons-material"

const CameraBtn = ({localStream}) => {
  const [cameraEnable, setCameraEnable] = useState(true)
  const cameraToggle = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnable
    setCameraEnable(!cameraEnable)
  }
    return (
    <IconButton onClick={cameraToggle} style={{color: '#fff'}}>
      {cameraEnable ? <VideoCallOutlined/> : <VideocamOffOutlined/>}
    </IconButton>
  )
}

export default CameraBtn

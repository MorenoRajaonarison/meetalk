import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {ScreenShareOutlined, StopScreenShareOutlined} from "@mui/icons-material"

const ScreenShareBtn = () => {
  const [isSharing, setIsSharing] = useState(false)
  const sharingToggle = () => setIsSharing(!isSharing)
  return (
    <IconButton onClick={sharingToggle} style={{color: '#fff'}}>
      {isSharing ? <ScreenShareOutlined/> : <StopScreenShareOutlined/>}
    </IconButton>
  )
}

export default ScreenShareBtn
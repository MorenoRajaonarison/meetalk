import React, {useState} from 'react'
import {IconButton} from '@mui/material'
import {ScreenShareOutlined, StopScreenShareOutlined} from "@mui/icons-material"
import * as webRtcHandler from '../../../Rtc/webRtcHandler'

const constraints = {
  audio: false,
  video: true
}

const ScreenShareBtn = ({localStream, screenSharingStream, isScreenSharingActive, setScreenSharingStream}) => {
  const [isSharing, setIsSharing] = useState(false)
  const sharingToggle = async () => {
    setIsSharing(!isSharing)
    if(!isScreenSharingActive){
      let stream = null
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints)
      } catch(e){
        console.log('error occured man')
      }
      if(stream){
        setScreenSharingStream(stream)
        webRtcHandler.switchOutGoingTracks(stream)
      }
    } else {
      webRtcHandler.switchOutGoingTracks(localStream)
      screenSharingStream.getTracks().forEach(t => t.stop())
      setScreenSharingStream(null)
    }
  }
  return (
    <IconButton onClick={sharingToggle} style={{color: '#fff'}}>
      {isSharing ?  <ScreenShareOutlined/>:<StopScreenShareOutlined/> }
    </IconButton>
  )
}

export default ScreenShareBtn
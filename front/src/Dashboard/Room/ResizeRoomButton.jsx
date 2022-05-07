import React from 'react'
import {styled} from "@mui/system"
import {IconButton} from "@mui/material"
import {CloseFullscreenOutlined, OpenInFullOutlined} from "@mui/icons-material";

const MainContainer = styled('div')({
  position: 'absolute',
  bottom: '10px',
  right: '10px'
})

const ResizeRoomButton = ({isRoomMinimized, resizeHandler}) => {
  return (
    <MainContainer>
      <IconButton style={{color: 'white'}} onClick={resizeHandler}>
        {isRoomMinimized ? <OpenInFullOutlined/> : <CloseFullscreenOutlined/>}
      </IconButton>
    </MainContainer>
  )
}

export default ResizeRoomButton

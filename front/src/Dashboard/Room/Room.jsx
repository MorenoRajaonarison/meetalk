import React, {useState} from 'react'
import {styled} from "@mui/system"

const MainContainer = styled('div')({
  position: 'absolute',
  borderRadius: '8px',
  display : 'flex',
  flexDirection: 'column',
  backgroundColor: '#202225'
})

const fullScreenRoomStyle = {
  width: '100%',
  height: '100vh'
}

const minimizeRoomStyle = {
  bottom: '0px',
  right: '0px',
  width: '30%',
  height: '40vh'
}

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true)

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized)
  }
  return (
    <MainContainer style={isRoomMinimized ? minimizeRoomStyle : fullScreenRoomStyle}>

    </MainContainer>
  )
}

export default Room

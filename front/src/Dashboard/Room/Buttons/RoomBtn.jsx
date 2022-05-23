import React from 'react'
import {useSelector} from 'react-redux'
import {styled} from "@mui/system"
import ScreenShareBtn from './ScreenShareBtn'
import MicroBtn from './MicroBtn'
import CloseRoomBtn from './CloseRoomBtn'
import CameraBtn from './CameraBtn'

const MainContainer = styled('div')({
  height: '15%',
  width: '100%',
  backgroundColor: '#5865f2',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center"
})

const RoomBtn = () => {
  const {localStream} = useSelector(state => state.room)
  return (
    <MainContainer>
      <ScreenShareBtn/>
      <MicroBtn localStream={localStream}/>
      <CameraBtn localStream={localStream}/>
      <CloseRoomBtn/>
    </MainContainer>
  )
}

export default RoomBtn

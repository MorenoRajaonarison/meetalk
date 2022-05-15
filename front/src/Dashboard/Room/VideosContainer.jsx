import React from 'react'
import {styled} from "@mui/system"
import {useSelector} from 'react-redux'
import Video from "./Video";

const MainContainer = styled('div')({
  height: '85%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
})

const VideosContainer = ({localStream}) => {
  const room = useSelector(state => state.room)
  return (
    <MainContainer>
      <Video stream={room.localStream} isLocalStream/>
    </MainContainer>
  )
}

export default VideosContainer

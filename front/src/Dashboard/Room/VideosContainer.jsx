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

const VideosContainer = () => {
  const {localStream, remoteStreams, screenSharingStream} = useSelector(state => state.room)
  return (
    <MainContainer>
      <Video stream={screenSharingStream? screenSharingStream: localStream} isLocalStream/>
      {remoteStreams.map(stream => <Video stream={stream} key={stream.id}/>)}
    </MainContainer>
  )
}

export default VideosContainer

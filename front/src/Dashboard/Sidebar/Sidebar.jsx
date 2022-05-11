import React from 'react'
import {styled} from '@mui/system'
import MainPageBtn from './MainPageBtn'
import CreateRoomButton from './CreateRoomButton'
import {useSelector, useDispatch} from "react-redux"
import ActiveRoomBtn from "./ActiveRoomBtn"

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
})

const Sidebar = () => {
  const {activeRooms, isUserInRoom} = useSelector(state => state.room)
  return <MainContainer>
    <MainPageBtn/>
    <CreateRoomButton/>
    {activeRooms.map(room => (
      <ActiveRoomBtn
        roomId={room.roomId}
        creatorUsername={room.creatorUsername}
        amountOfParticipants={room.participants.length}
        key={room.roomId}
        isUserInRoom={isUserInRoom}
      />))
    }
  </MainContainer>
}

export default Sidebar

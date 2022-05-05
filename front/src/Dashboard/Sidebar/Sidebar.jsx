import React from 'react'
import {styled} from '@mui/system'
import MainPageBtn from './MainPageBtn'
import CreateRoomButton from './CreateRoomButton'

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
})

const Sidebar = () => {
  return <MainContainer>
    <MainPageBtn/>
    <CreateRoomButton/>
  </MainContainer>
}

export default Sidebar

import React from 'react'
import {styled} from '@mui/system'
import Sidebar from "./Sidebar/Sidebar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import Appbar from "./Appbar/Appbar";

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = () => {
  return <Wrapper>
    <Sidebar/>
    <FriendsSidebar/>
    <Messenger/>
    <Appbar/>
  </Wrapper>
}

export default Dashboard

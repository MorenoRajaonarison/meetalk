import React, {useEffect} from 'react'
import {styled} from '@mui/system'
import Sidebar from "./Sidebar/Sidebar"
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar"
import Messenger from "./Messenger/Messenger"
import Appbar from "./Appbar/Appbar"
import {logout} from "../shared/Utils/auth"
import {connect} from 'react-redux'
import {getActions} from "../store/actions/authActions"
import {connectWithSocketServer} from "../Rtc/socketConnection"
import Room from "./Room/Room"

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = ({setUserDetails, isUserInRoom}) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user')
    if(!userDetails) {
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
      connectWithSocketServer(JSON.parse(userDetails))
    }
  }, []);
  
  return <Wrapper>
    <Sidebar/>
    <FriendsSidebar/>
    <Messenger/>
    <Appbar/>
    {isUserInRoom && <Room/>}
  </Wrapper>
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard)

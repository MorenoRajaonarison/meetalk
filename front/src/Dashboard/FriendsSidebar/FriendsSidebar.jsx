import React from 'react'
import {styled} from '@mui/system'
import AddFriendBtn from "./AddFriendBtn"
import FriendsTitle from "./FriendsTitle"
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationList from "./PendingInvitationList/PendingInvitationList";

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
})

const FriendsSidebar = () => {
  return <MainContainer>
    <AddFriendBtn/>
    <FriendsTitle title="Message Privé"/>
    <FriendsList/>
    <FriendsTitle title="Invitations"/>
    <PendingInvitationList/>
  </MainContainer>
}

export default FriendsSidebar

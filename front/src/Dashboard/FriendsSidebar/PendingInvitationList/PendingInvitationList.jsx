import React from 'react'
import {styled} from '@mui/material'
import InvitationItem from './InvitationItem'
import {connect} from "react-redux";


const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const PendingInvitationList = ({pendingFriendsInvitations}) => {
  return <MainContainer>
    {pendingFriendsInvitations.map(i => (
      <InvitationItem
        key={i._id}
        id={i._id}
        username={i.senderId.username}
        mail={i.senderId.mail}
      />
    ))}
  </MainContainer>
}

const mapStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStateToProps)(PendingInvitationList)

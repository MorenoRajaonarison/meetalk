import React from 'react'
import {styled} from '@mui/material'
import InvitationItem from './InvitationItem'

const INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Andry',
      mail: 'andry@gmail.com'
    }
  }
]

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const PendingInvitationList = () => {
  return <MainContainer>
    {INVITATIONS.map(i => (
      <InvitationItem
        key={i._id}
        id={i._id}
        username={i.senderId.username}
        mail={i.senderId.mail}
      />
    ))}
  </MainContainer>
}

export default PendingInvitationList

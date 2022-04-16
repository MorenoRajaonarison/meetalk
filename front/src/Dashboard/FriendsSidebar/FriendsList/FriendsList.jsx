import React from 'react'
import {styled} from '@mui/material'
import FriendsListItem from "./FriendsListItem";

const FRIENDS = [
  {
    id: 1,
    username: 'Moreno',
    isOnline: true
  }
]

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',

})

const FriendsList = () => {
  return (
    <MainContainer>
      {FRIENDS.map(({username, id, isOnline}) =>
        <FriendsListItem
          username={username}
          id={id}
          isOnline={isOnline}
          key={id}
        />)}
    </MainContainer>
  )
}

export default FriendsList

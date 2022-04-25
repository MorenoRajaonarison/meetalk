import React from 'react'
import {styled} from '@mui/material'
import FriendsListItem from "./FriendsListItem"
import {connect} from 'react-redux'

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',

})

const FriendsList = ({friends}) => {
  return (
    <MainContainer>
      {friends.map(({username, id, isOnline}) =>
        <FriendsListItem
          username={username}
          id={id}
          isOnline={isOnline}
          key={id}
        />)}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStoreStateToProps)(FriendsList)

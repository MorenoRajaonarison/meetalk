import io from 'socket.io-client'
import store from "../store/store"
import {setPendingFriendsInvitations, setFriends, setOnlineUsers} from "../store/actions/friendsActions"

let socket = null

export const connectWithSocketServer = (userDetails) => {
  socket = io('http://localhost:5002', {
    auth: {
      token: userDetails.token
    }
  })

  socket.on('connect', () => {
    console.log('succesfully connected with socket server')
    console.log(socket.id)
  })

  socket.on('friends-invitations', data => {
    const {pendingInvitations} = data
    store.dispatch(setPendingFriendsInvitations(pendingInvitations))
  })
  
  socket.on('friends-list', data => {
    const {friends} = data
    store.dispatch(setFriends(friends))
  })

  socket.on('online-users', data => {
    const {onlineUsers} = data
    store.dispatch(setOnlineUsers(onlineUsers))
  })
}

export const sendDirectMessage = data => {
  socket.emit('direct-message', data)
  console.log(data)
}

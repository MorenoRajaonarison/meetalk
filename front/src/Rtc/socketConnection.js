import io from 'socket.io-client'
import store from "../store/store";
import {setPendingFriendsInvitations} from "../store/actions/friendsActions";

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

  socket.on('friends-invitation', data => {
    const {pendingFriendsInvitations} = data
    store.dispatch(setPendingFriendsInvitations())
  })
}


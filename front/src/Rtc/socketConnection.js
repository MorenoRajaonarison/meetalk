import io from 'socket.io-client'
import store from "../store/store"
import {setPendingFriendsInvitations, setFriends, setOnlineUsers} from "../store/actions/friendsActions"
import {updateDirectChatHistoryIfActive} from '../shared/Utils/chat'
import * as roomHandler from "./roomHandler"
import * as webRtcHandler from './webRtcHandler'

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

  socket.on('direct-chat-history', data => {
    updateDirectChatHistoryIfActive(data)
  })

  socket.on('room-create', data => {
    roomHandler.newRoomCreated(data)
  })

  socket.on('active-rooms', data => {
    roomHandler.updateActiveRooms(data)
  })

  socket.on('conn-prepare', data => {
    const {connUserSocketId} = data
    webRtcHandler.prepareNewPeerConnexion(data, false)
    socket.emit('conn-init', {connUserSocketId})
  })
}

export const sendDirectMessage = data => {
  socket.emit('direct-message', data)
}

export const getDirectChatHistory = data => {
  socket.emit('direct-chat-history', data)
}

export const createNewRoom = () => {
  socket.emit('room-create')
}

export const joinRoom = data => {
  socket.emit('room-join', data)
}

export const leaveRoom = data => {
  socket.emit('room-leave', data)
}
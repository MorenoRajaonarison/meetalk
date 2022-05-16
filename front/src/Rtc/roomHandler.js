import store from '../store/store'
import {setOpenRoom, setRoomDetails, setActiveRooms, setLocalStream} from "../store/actions/roomActions"
import * as socketConnection from './socketConnection'
import * as webRtcHandler from './webRtcHandler'

export const createNewRoom = () => {
  const successCallBack = () => {
    store.dispatch(setOpenRoom(true, true))
    socketConnection.createNewRoom()
  }
  webRtcHandler.getLocalStreamPreview(store.getState().room.audioOnly, successCallBack)
}

export const newRoomCreated = data => {
  const {roomDetails} = data
  store.dispatch(setRoomDetails(roomDetails))
}

export const updateActiveRooms = data => {
  const {activeRooms} = data
  const friends = store.getState().friends.friends
  const rooms = []
  activeRooms.forEach(room => {
    friends.forEach(f => {
      if(f.id === room.roomCreator.userId){
        rooms.push({...room, creatorUsername: f.username})
      }
    })
  })
  store.dispatch(setActiveRooms(rooms))
}

export const joinRoom = roomId => {
  const successCallBack = () => {
    store.dispatch(setRoomDetails({roomId}))
    store.dispatch(setOpenRoom(false, true))
    socketConnection.joinRoom({roomId})
  }
  webRtcHandler.getLocalStreamPreview(store.getState().room.audioOnly, successCallBack)
}

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId
  const localStream = store.getState().room.localStream
  if(localStream) {
    localStream.getTracks().forEach(track => track.stop())
    store.dispatch(setLocalStream(null))
  }
  socketConnection.leaveRoom({roomId})
  store.dispatch(setRoomDetails(null))
  store.dispatch(setOpenRoom(false, false))
}
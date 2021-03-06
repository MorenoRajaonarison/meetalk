import store from '../store/store'
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setScreenSharingStream,
  setIsUserJoinedOnlyWithAudio
} from "../store/actions/roomActions"
import * as socketConnection from './socketConnection'
import * as webRtcHandler from './webRtcHandler'

export const createNewRoom = () => {
  const successCallBack = () => {
    store.dispatch(setOpenRoom(true, true))
    const audioOnly = store.getState().room.audioOnly
    store.dispatch(setIsUserJoinedOnlyWithAudio(audioOnly))
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
    const userId = store.getState().auth.userDetails?._id
    const isRoomCreatedByMe = room.roomCreator.userId === userId
    if(isRoomCreatedByMe) {
      rooms.push({...room, creatorUsername: "Moi"})
    } else {
      friends.forEach(f => {
        if(f.id === room.roomCreator.userId ){
          rooms.push({...room, creatorUsername: f.username})
        }
      })
    }
  })
  store.dispatch(setActiveRooms(rooms))
}

export const joinRoom = roomId => {
  const successCallBack = () => {
    store.dispatch(setRoomDetails({roomId}))
    store.dispatch(setOpenRoom(false, true))
    const audioOnly = store.getState().room.audioOnly
    store.dispatch(setIsUserJoinedOnlyWithAudio(audioOnly))
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
  
  const screenSharingStream = store.getState().room.screenSharingStream
  if(screenSharingStream) {
    localStream.getTracks().forEach(track => track.stop())
    store.dispatch(setScreenSharingStream(null))
  }
  
  store.dispatch(setRemoteStreams([]))
  webRtcHandler.closeAllConn()

  socketConnection.leaveRoom({roomId})
  store.dispatch(setRoomDetails(null))
  store.dispatch(setOpenRoom(false, false))
}
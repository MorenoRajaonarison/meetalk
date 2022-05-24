export const roomActions = {
  OPEN_ROOM: 'ROOM.OPEN_ROOM',
  SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
  SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
  SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
  SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
  SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
  SET_SCREEN_SHARE_STREAM: 'ROOM.SET_SCREEN_SHARE_STREAM'
}

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
  return {
    type: roomActions.OPEN_ROOM,
    isUserInRoom,
    isUserRoomCreator
  }
}

export const getActions = dispatch => {
  return {
    setAudioOnly: onlyAudio => dispatch(setAudioOnly(onlyAudio)),
    setScreenSharingStream: stream => dispatch(setScreenSharingStream(stream))
  }
}

export const setRoomDetails = roomDetails => {
  return {
    type: roomActions.SET_ROOM_DETAILS,
    roomDetails
  }
}

export const setActiveRooms = activeRooms => {
  return {
    type: roomActions.SET_ACTIVE_ROOMS,
    activeRooms
  }
}

export const setLocalStream = localStream => {
  return {
    type: roomActions.SET_LOCAL_STREAM,
    localStream
  }
}

export const setAudioOnly = audioOnly => {
  return {
    type: roomActions.SET_AUDIO_ONLY,
    audioOnly
  }
}

export const setRemoteStreams = remoteStreams => {
  return {
    type: roomActions.SET_REMOTE_STREAMS,
    remoteStreams
  }
}

export const setScreenSharingStream = stream => {
  return {
    type: roomActions.SET_SCREEN_SHARE_STREAM,
    isScreenSharingActive: stream? true:false,
    screenSharingStream: stream || null
  }
}
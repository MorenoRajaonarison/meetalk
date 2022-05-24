import store from '../store/store'
import {setLocalStream, setRemoteStreams} from "../store/actions/roomActions"
import * as socketConnection from './socketConnection'
import Peer from 'simple-peer'

const getConfiguration = () => {
  const turnInServer = null
  if(turnInServer) {
    // use Turn server credentials
  } else {
    console.warn('Using only STUN server')
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
  }
}

const onlyAudioConstraints = {
  audio: true,
  video: false
}

const defaultConstraints = {
  audio: true,
  video: true
}

export const getLocalStreamPreview = (onlyAudio = false, callBackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints
  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    store.dispatch(setLocalStream(stream))
    callBackFunc()
  }).catch(err => {
    console.log(err)
    console.log('cannot get an access to localStream')
  })
}

let peers= {}

export const prepareNewPeerConnexion = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream
  if(isInitiator){
    console.log('preparation nouvell conexion en tant uinitiateur')
  } else {
    console.log('not')
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream
  })

  peers[connUserSocketId].on('signal', data => {
    const signalData = {
      signal: data,
      connUserSocketId
    }

      socketConnection.signalPeerData(signalData)
  })
  peers[connUserSocketId].on('stream', remoteStream => {
    //TODO: add new remote stream to our server store
    console.log('remote stream came from other user')
    console.log('connction etablished')
    remoteStream.connUserSocketId = connUserSocketId
    addNewRemoteStream(remoteStream)
  })
}

export const handleSignalingData = data => {
  const {connUserSocketId, signal} = data
  if(peers[connUserSocketId]){
    peers[connUserSocketId].signal(signal)
  }
}

const addNewRemoteStream = remoteStream => {
  const remoteStreams = store.getState().room.remoteStreams
  const newRemoteStreams = [...remoteStreams, remoteStream]
  store.dispatch(setRemoteStreams(newRemoteStreams))
}

export const closeAllConn = () => {
  Object.entries(peers).forEach(mappedObject => {
    const connUserSocketId = mappedObject[0]
    if(peers[connUserSocketId]){
      peers[connUserSocketId].destroy()
      delete peers[connUserSocketId]
    }
  })
}

export const handleParticipantLeft = data => {
  const {connUserSocketId} = data
  if(peers[connUserSocketId]){
    peers[connUserSocketId].destroy()
    delete peers[connUserSocketId]
  }
  const remoteStreams = store.getState().room.remoteStreams
  const newRemoteStreams = remoteStreams.filter(stream => stream.connUserSocketId !== connUserSocketId)
  store.dispatch(setRemoteStreams(newRemoteStreams))
}

export const switchOutGoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
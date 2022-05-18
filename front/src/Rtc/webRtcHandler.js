import store from '../store/store'
import {setLocalStream} from "../store/actions/roomActions"
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

    // TODO: pass signal data to another user

    // socketConnection.signalPeerData(signalData)
  })
  peers[connUserSocketId].on('stream', remoteStream => {
    //TODO: add new remote stream to our server store
  })
}
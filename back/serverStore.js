const {uuid} = require('uuidv4')

const connectedUser = new Map()
let activeRooms = []
let io = null

const setSocketServerInstance = ioInstance => {
  io = ioInstance
}

const getSocketServerInstance = () => {
  return io
}

const addNewConnectedUser = ({socketId, userId}) => {
  connectedUser.set(socketId, {userId})
  console.log('new connected users')
  console.log(connectedUser)
}

const removeConnectedUser = socketId => {
  if(connectedUser.has(socketId)){
    connectedUser.delete(socketId)
    console.log('new connected users')
    console.log(connectedUser)
  }
}

const getActiveConnections = userId => {
  const activeConnection = []
  connectedUser.forEach(function (value, key) {
    if(value.userId === userId) {
      activeConnection.push(key)
    }
  })

  return activeConnection
}

const getOnlineUsers = () => {
  const onlineUsers = []
  connectedUser.forEach((val, key) => {
    onlineUsers.push({socketId: key, userId: val.userId})
  })
  return onlineUsers
}

// rooms
const addNewActiveRooms = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId,
      socketId
    },
    participants: [
      {
        userId,
        socketId
      }
    ],
    roomId: uuid()
  }
  activeRooms = [...activeRooms, newActiveRoom]
  return newActiveRoom
}

const getActiveRooms = () => {
  return [...activeRooms]
}

const getActiveRoom = roomId => {
  const activeRoom = activeRooms.find(activeRoom => activeRoom.roomId === roomId)
  return {...activeRoom}
}

const joinActiveRoom = (roomId, participants) => {
  const room = activeRooms.find(room => room.roomId === roomId)
  activeRooms = activeRooms.filter(room => room.roomId !== roomId)

  const updatedRoom = {
    ...room,
    participants: [...room.participants, participants]
  }
  activeRooms.push(updatedRoom)
  console.log(activeRooms)
}

const leaveActiveRoom = (roomId, participantSocketId) => {
  const activeRoom = activeRooms.find(room => room.roomId === roomId)
  if(activeRoom){
    const copyOfActiveRoom = {...activeRoom}
    copyOfActiveRoom.participants = copyOfActiveRoom.participants.filter(participant => participant.socketId !== participantSocketId)
    activeRooms = activeRooms.filter(room => room.roomId !== roomId)
    if(copyOfActiveRoom.participants.length > 0) {
      activeRooms.push(copyOfActiveRoom)
    }
  }
}

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers,
  addNewActiveRooms,
  getActiveRooms,
  getActiveRoom,
  joinActiveRoom,
  leaveActiveRoom
}
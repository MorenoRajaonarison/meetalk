const connectedUser = new Map()
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

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers
}
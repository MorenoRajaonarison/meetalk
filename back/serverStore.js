const connectedUser = new Map()

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

module.exports = {
  addNewConnectedUser,
  removeConnectedUser
}
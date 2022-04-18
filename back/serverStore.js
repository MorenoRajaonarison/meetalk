const connectedUser = new Map()

const addNewConnectedUser = ({socketId, userId}) => {
  connectedUser.set(socketId, {userId})
  console.log(connectedUser)
}

module.exports = {
  addNewConnectedUser,
}
const serverStore = require('../serverStore')
const friendsUpdate = require('../socketHandlers/updates/friends')
const roomsUpdate = require('./updates/rooms')

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.id
  })

  // maj du list d'invitation
  friendsUpdate.updateFriendsPendingInvitation(userDetails.id)

  //maj du list d'ami
  friendsUpdate.updateFriends(userDetails.id)

  //maj list room
  setTimeout(() => {
    roomsUpdate.updateRooms(socket.id)
  }, [500])

}

module.exports = newConnectionHandler
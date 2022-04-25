const serverStore = require('../serverStore')
const friendsUpdate = require('../socketHandlers/updates/friends')

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
}

module.exports = newConnectionHandler
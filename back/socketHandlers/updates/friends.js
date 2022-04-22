const User = require('../../models/user')
const FriendInvitation = require('../../models/friendsInvitation')
const serverStore = require('../../serverStore')

const updateFriendsPendingInvitation = async userId => {
  try{
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId
    }).populate('senderId', '_id username mail')

    // trouver si l'user de l'id specifier est active
    const receiverList = serverStore.getActiveConnections(userId)
    const io = serverStore.getSocketServerInstance()

    receiverList.forEach(receiverSocketId => {
      io.to(receiverSocketId).emit('friends-invitations', {
        pendingInvitations: pendingInvitations ? pendingInvitations : []
      })
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  updateFriendsPendingInvitation
}
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

const updateFriends = async userId => {
  try {
    // trouver les amis actif
    const receiverList = serverStore.getActiveConnections(userId)

    if(receiverList.length>0) {
      const user = await  User.findById(userId, {_id:1, friends: 1}).populate(
        'friends',
        '_id username mail'
      )
      if(user){
        const friendList = user.friends.map(f => {
          return {
            id: f._id,
            mail: f.mail,
            username: f.username
          }
        })

        const io = serverStore.getSocketServerInstance()
        receiverList.forEach(receiverSocketId => {
          io.to(receiverSocketId).emit('friends-list', {
            friends: friendList ? friendList : []
          })
        })
      }
    }
  }catch(e){
    console.log(e)}
}

module.exports = {
  updateFriendsPendingInvitation,
  updateFriends
}
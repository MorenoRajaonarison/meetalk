const FriendInvitation = require('../../models/friendsInvitation')
const User = require('../../models/user')
const friendsUpdates = require('../../socketHandlers/updates/friends')

const postAccept = async (req, res) => {
  try {
    const {id} = req.body
    const invitation = await FriendInvitation.findById(id)
    if(!invitation) return res.status(401).send('Une erreur est survenue')
    const {senderId, receiverId} = invitation

    //ajouter a la liste d'amis
    const senderUser = await User.findById(senderId)
    senderUser.friends = [...senderUser.friends, receiverId]
    const receiverUser = await User.findById(receiverId)
    receiverUser.friends = [...receiverUser.friends, senderId]
    await senderUser.save()
    await receiverUser.save()

    //suppr de l'invitation
    await FriendInvitation.findByIdAndDelete(id)

    //TODO: maj de la list d'ami s'ol est actif
    //TODO: maj de la list d'invitations
    friendsUpdates.updateFriendsPendingInvitation(receiverId.toString())
    return res.status(200).send('Ajouter a la list d\'amis')
  }catch(e){
    console.log(e)
    return res.status(500).send('Une erreur est survenue, reesayer')
  }
}

module.exports = postAccept
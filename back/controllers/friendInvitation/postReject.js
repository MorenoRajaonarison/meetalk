const FriendInvitation = require('../../models/friendsInvitation')
const friendsUpdates = require("../../socketHandlers/updates/friends")

const postReject = async (req, res) => {
  try {
    const {id}= req.body

    //suppr l'invitation de la db
    const invitationExist = await FriendInvitation.exists({_id:id})
    if(invitationExist){
      await FriendInvitation.findByIdAndDelete(id)
    }

    //maj de l'invitation en attente
    friendsUpdates.updateFriendsPendingInvitation(req.user.id)
    return res.status(200).send('Invitation rejeter avec success')
  }catch(e){
    return res.status(500).send('Une erreur est survenue, Reesayer')
  }

}

module.exports = postReject
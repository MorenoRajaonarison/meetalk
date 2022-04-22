const User = require('../../models/user')
const Invitation = require('../../models/friendsInvitation')
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postInvite = async (req, res) => {
  const {targetMail} = req.body
  const {id, mail} = req.user

  if(mail.toLowerCase() === targetMail.toLowerCase()){
    return res.status(409).send('Sorry, You cannot send invitation')
  }

  const targetUser = await User.findOne({mail:targetMail.toLowerCase()})
  if(!targetUser) {
    return res.status(404).send('This email does not exist')
  }

  // verfification si l'invitation a ete envoyer
  const invitationAlreadyReceived = await Invitation.findOne({
    senderId: id,
    receiverId: targetUser._id
  })

  if(invitationAlreadyReceived){
    return res.status(409).send('Invitation has been already sent')
  }

  // verification si c'est deja un ami
  const usersAlreadyFriend = targetUser.friends.find(friendId => friendId.toString() === id.toString())

  if(usersAlreadyFriend) {
    return res.status(409).send('Cette adresse est deja dans votre liste d\'ami')
  }

  // enregitrement d'invitation adns le db
  const newInvitation = await Invitation.create({
    senderId: id,
    receiverId: targetUser._id
  })

  // envoi de l'invitation en attente
  friendsUpdate.updateFriendsPendingInvitation(targetUser._id.toString())
  return res.status(201).send('Invitation envoyer')
}



module.exports = postInvite
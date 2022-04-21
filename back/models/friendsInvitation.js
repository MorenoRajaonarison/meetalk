const {Schema, model} = require('mongoose')

const friendsInvitationSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  reveiverId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
})

module.exports = model('friendsInvitation', friendsInvitationSchema)
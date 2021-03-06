const Message = require('./../models/message')
const Conversation = require('./../models/conversation')
const chatUpdates = require('./updates/chat')

const directMessageHandler = async (socket, data) => {
  try {
    const {id} = socket.user
    const {receiverUserId, content} = data

    // creation d'un nouveau message
    const message = await Message.create({
      content,
      author: id,
      date: new Date(),
      type: 'DIRECT'
    })

    // verification si la conversation exist deja
    const conversation = await Conversation.findOne({
      participants: {$all: [id, receiverUserId]}
    })
    if(conversation){
      conversation.messages.push(message._id)
      await conversation.save()

      // persist et maj
      chatUpdates.updateChatHistory(conversation._id.toString())
    } else {
      const conversation = await Conversation.create({
        messages: [message._id],
        participants: [id,receiverUserId]
      })
      // persist et maj
      chatUpdates.updateChatHistory(conversation._id.toString())
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = directMessageHandler
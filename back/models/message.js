const {Schema, model} = require('mongoose')

const messageSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  content: {type: String},
  date: {type: Date},
  type: {type: String}
})

module.exports = model('message',messageSchema)
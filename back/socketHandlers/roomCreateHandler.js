const serverStore = require('../serverStore')
const {updateRooms} = require('./updates/rooms')

const roomCreateHandler = socket => {
  const socketId = socket.id
  const userId = socket.user.id
  const roomDetails = serverStore.addNewActiveRooms(userId, socketId)

  socket.emit('room-create', {
    roomDetails
  })
  updateRooms()
}

module.exports = roomCreateHandler
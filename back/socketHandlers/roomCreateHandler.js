const serverStore = require('../serverStore')

const roomCreateHandler = socket => {
  console.log('room creator handler')
  const socketId = socket.id
  const userId = socket.user.id
  const roomDetails = serverStore.addNewActiveRooms(userId, socketId)

  socket.emit('room-create', {
    roomDetails
  })
}

module.exports = roomCreateHandler
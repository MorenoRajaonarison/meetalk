const {getSocketServerInstance, getActiveRooms} = require('../../serverStore')

const updateRooms = (toSpecifyTargetId = null) => {
  const io = getSocketServerInstance()
  const activeRooms = getActiveRooms()
  if(toSpecifyTargetId) {
    io.to(toSpecifyTargetId).emit('active-rooms', {
      activeRooms
    })
  } else {
    io.emit('active-rooms', {
      activeRooms
    })
  }
}

module.exports = {
  updateRooms
}
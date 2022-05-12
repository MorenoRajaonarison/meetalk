const serverStore = require('../serverStore')
const roomUpdates = require('./updates/rooms')

const roomLeaveHandler = (socket, data) => {
  const {roomId} = data
  const activeRoom = serverStore.getActiveRoom(roomId)

  if(activeRoom){
    serverStore.leaveActiveRoom(roomId, socket.id)

    roomUpdates.updateRooms()
  }
}
module.exports = roomLeaveHandler
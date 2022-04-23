const jwt = require('jsonwebtoken')

const config = process.env

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token
  try {
    const decoded = jwt.verify(token, config.JWT_KEY)
    socket.user = decoded
  } catch (e) {
    return next(new Error('NOT AUTHORIZED'))
  }
  next()
}

module.exports = verifyTokenSocket  
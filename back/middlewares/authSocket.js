const jwt = require('jsonwebtoken')

const config = process.env

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token
  try {
    socket.user = jwt.verify(token, config.JWT_KEY)
  } catch (e) {
    return next(new Error('NOT AUTHORIZED'))
  }
  next()
}

module.exports = verifyTokenSocket
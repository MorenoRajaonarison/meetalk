import io from 'socket.io-client'

let socket = null

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5002')
  socket.on('connect', () => {
    console.log('succesfully connected with socket server')
    console.log(socket.id)
  })
}


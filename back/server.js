const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const socketServer = require('./socketServer')
const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || process.env.API_PORT

const app = express()
app.use(express.json())
app.use(cors())

// registre des routes
app.use('/api/auth', authRoutes)

const server = http.createServer(app)
socketServer.registerSocketServer(server)

// Connection du DB / Server
mongoose.connect(process.env.DB)
  .then(() => {
    server.listen(PORT,() => {
      console.log(`Server is listening at ${PORT}`)
    })
  })
  .catch(e => {
    console.log('Database connection failed.')
  })
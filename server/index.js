const express = require('express')
const app = express()
const port = process.env.PORT || 10000

const cors = require('cors')
app.use(cors())

// Connecting to the socket
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')

const io = new Server(server, {
  // Enabling cors for the server
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  // Message event
  socket.on('message', message => {
    io.emit('message', `{socket.id}@@@${message}`)
  })

  socket.on('joinRoom', roomName => {
    // Validate and sanitize the room ID
    if (typeof roomName !== 'string' || !/^[a-zA-Z0-9_\-]+$/.test(roomName)) {
      return socket.emit('joinRoomError', 'Invalid room name.')
    }
    // Join the room
    socket.join(roomName)
  })

  socket.on('send-room', mess => {
    const roomID = mess.split('@@@')[4]
    io.to(roomID).emit('receive-room', mess)
  })
})

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

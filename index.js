import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import { dir } from 'node:console';
const app = express()
const port = 3000
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url))
let playeramount = 0

io.on('connection', (socket) => {
    playeramount++
    io.emit('amount',playeramount)
    socket.on('disconnect',() => {
        playeramount--
        io.emit('amount',playeramount)
    })
})

io.on('connection', (socket) => {
    socket.on('joinRoom', (roomName) =>{
        socket.join(roomName);
        socket.roomName = roomName
    })

    

    socket.on('bingo', (bing) => {
        io.to(socket.roomName).emit('bingo', (bing))
    })

    socket.on('colors' ,(colors) => {
        io.to(socket.roomName).emit('colors', (colors))
    })

    socket.on('reset', () => {
        io.to(socket.roomName).emit('reset')
    })
})

app.use('/',express.static(join(__dirname, 'static')))


server.listen(port, () => {
  console.log(`serwer działa na localhost:3000`)
})

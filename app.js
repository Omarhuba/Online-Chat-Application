const express = require('express')
const {Server} = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.use( (socket, next) =>{
    console.log(socket.handshake);
    if(socket.handshake.auth.tocken != 'hello'){
        next(new Error('Unauthorizad'))
    }else{
        next()
    }
} )




io.on('connection', (socket) =>{
    console.log('Client connected with ID:' + socket.id);

    socket.on('disconnect', () => {
        console.log("Client disconnected");
      })


      socket.on('ping', message=>{
          console.log('Recieved: ' +  message + 'from' + socket.id );
          socket.broadcast.emit('pong', message)
        })
})






const PORT = process.env.PORT || 8000
server.listen(PORT,()=>{
    console.log(`SERVER STARTED ON PORT: ${PORT}`);
})


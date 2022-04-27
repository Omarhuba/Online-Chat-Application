import {io} from '/socket.io/socket.io.esm.min.js'
// const socket = io()
// io.disconnect()

let socket = null;
const connectBtn = document.querySelector('.connect-btn')
const disconnectBtn = document.querySelector('.disconnect-btn')
const connectionStatus = document.querySelector('.connection-status')
const inputField =document.querySelector('.container input')
const sendBtn = document.querySelector('.container button')


connectBtn.addEventListener('click', ()=>{
    socket = io({
        auth:{
            tocken: 'hello'
        }
    })

    connectionStatus.innerText = 'Connected'
    socket.on('connect_error', (error)=>{
        console.log(error);
        connectionStatus.innerText = 'Error'
    })

    socket.on('pong', message =>{
        console.log(message)
    })
})

disconnectBtn.addEventListener('click',()=>{
    socket.disconnect()
    socket = null
    connectionStatus.innerText = 'Disconnected'
})

sendBtn.addEventListener('click', ()=>{
    const {value} = inputField
    socket.emit('ping', value)
})
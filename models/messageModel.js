const mongoose = require('mongoose')
const {connectionDB} = require('../database/connection')

// const {Schema} = mongoose


const messageSchema = new mongoose.Schema({
    content: String,
})
const Message = mongoose.model('Message', messageSchema)






module.exports = {Message}




// const allMessages = async ()=>{
//   const all = await Message.find()
//   console.log(all);
// }
// allMessages()





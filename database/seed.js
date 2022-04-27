const {Message} = require('../models/messageModel')
const {User} = require('../models/userModel')
const createMessage = async() =>{
    try{
        const messages = await new Message({content:'hello world'})
        await messages.save()
        console.log(messages);
    }catch(err){
        console.log(err);
    }
}
createMessage()


const createUser = async ()=>{
    try{
        const user = await new User({
            name: 'omar',
            email: 'omar@gmail.com',
            password: 'hello'
        })
        await user.save()
    }catch(err){
        console.log(err);
    }
}
createUser()

const alluser = async ()=>{
    const user = await User.find()
    console.log(user);
}
alluser()




const allMessages = async ()=>{
    const all = await Message.find()
    console.log(all);
}
allMessages()
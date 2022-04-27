require('dotenv').config()
const mongoose = require('mongoose')

const {DATABASE_URI} = process.env
const connectionDB = async ()=> {
    await mongoose.connect(`${DATABASE_URI}test`)
    console.log('connected');
}
connectionDB()
module.exports = {connectionDB}


// const mongoose = require('mongoose')


// const connectiondb = async ()=> {

//  await mongoose.connect('mongodb://localhost:27017/test')
//     console.log('connected');

// }

// connectiondb()

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
//     console.log("connected to database");
// })
const {User} = require('../models/userModel')


async function user(){
    const newUser = await User.findOne({name: 'omar'})
    console.log(newUser);
}
user()
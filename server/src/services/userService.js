const bcrypt = require('bcrypt')

const User = require('../models/User')

async function register(email, password){

    const existing = await User.findOne({email: new RegExp(`^${email}$`, 'i')})

    if(existing){
        throw new Error('Email already exists')
    }

    const user = new User({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    })
    await user.save()

    return user

}


module.exports = {
    register,
    
}
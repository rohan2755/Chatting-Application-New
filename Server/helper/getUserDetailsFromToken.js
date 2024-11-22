const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')

const getUserDetailsFromToken = async(token)=>{
    if(!token){
        return {
            message : "sessions out",
            logout : true
        }
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET)

    console.log("decode", decode)

    const user = await UserModel.findById(decode.id).select('-password')

    return user
}

module.exports = getUserDetailsFromToken
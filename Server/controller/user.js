
const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res)=>{
    try{
        const {name , email, password} = req.body
        const checkUser = await UserModel.findOne({email})

        if(checkUser){
            return res.status(400).json({
                message : 'Already user exist',
                error : true
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }

        const user = new UserModel(payload);
        const userSave = await user.save()

        return res.status(201).json({
            message : "User created successfully",
            data : userSave,
            success : true
        })
    } catch(error){
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}



const loginUser = async(req,res)=>{
    const {email, password} = req.body;

   try{
    const checkUser = await UserModel.findOne({email})

    if(!checkUser){
        return res.status(404).json({
            message : "Register first",
            error : true
        })
    }

    const isMatch = await bcrypt.compare(password , checkUser.password)

    if(!isMatch){
        return res.status(401).send('Invalid Credential')
    }

    const token = jwt.sign(
        {id:checkUser._id , email:checkUser.email, name:checkUser.name},
        process.env.JWT_SECRET,
        {expiresIn : "6h"}
    )

    res.cookie("token", token)

    res.status(200).json({
        data : { id: checkUser._id, email: checkUser.email, name: checkUser.name, token},
        error : false,
        success : true,
        message : "Login successful"
    })
   } catch(error){
    console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
   }


}



module.exports = {
    registerUser,
    loginUser
}
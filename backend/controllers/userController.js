import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

const createUser =asyncHandler(async (req,res,userId)=>{
    const {name , email , password} = req.body
    if(!name || !email || !password){
        res.status(400).json({message : 'please fill all fields'})
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400).json({message : 'user already exists'})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)

    const user = await User.create({name , email , password : hashedPassword})

    if(user){
        generateToken(res ,user._id)
        res.status(200).json({
            name : user.name, 
            email : user.email,
            id : user._id
        })
    }

    
})
const loginUser =asyncHandler( async(req,res)=>{
    const {email , password} = req.body
    const user = await User.findOne({email})
    
    if(user && (await bcrypt.compare(password , user.password))){
        generateToken(res,user._id)
        res.status(200).json({
            name : user.name,
            email : user.email,
            id: user._id
        })
    }else{
        res.status(401).json({message : 'password or email incorrect'})
    }

})
const updateUser =asyncHandler(async (req,res)=>{
    const {name ,email , password} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(401).json({message : 'user does not exist'})
    }
    
    if(user){
        user.name === req.body.name || user.name
        user.email === req.body.email ||user.email
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password , salt)
            user.password === hashedPassword
        }
    }
    const updatedUser = await User.save()

        res.status(200).json({
            name : updatedUser.name,
            email : updatedUser.email,
            id: updatedUser._id
        })
})
const deleteUser = (req,res)=>{
    res.status(200).json({message : 'user delete works'})
}

const logout = (req,res)=>{
    res.status(200).json({message : 'user delete works'})
}


export  {createUser , loginUser , updateUser , deleteUser , logout}
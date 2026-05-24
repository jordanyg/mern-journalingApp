import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async(req,res,next)=>{
    let token
    token = req.cookies.jwt
    if(token){
        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRET)
            const user =  await User.findById(decoded.userId).select('-password')

            if (!user) {
                res.status(401)
                throw new Error('User not found')
            }

            req.user = user

            next()
            
        } catch (error) {
            res.status(400)
            throw new Error ('unauthorized ,invalid token')
        }
    }
    if(!token){
        res.status(400)
        throw new Error('unauthorized , no token')
    }
})

export default protect

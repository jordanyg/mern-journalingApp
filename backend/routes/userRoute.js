import express from 'express'
import {createUser , loginUser , updateUser , deleteUser , logout } from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const route = express.Router()

route.post('/register' , createUser)
route.post('/login' , loginUser)
route.post('/logout',protect , logout)
route.put('/' ,protect, updateUser)
route.delete('/',protect , deleteUser)

export default route
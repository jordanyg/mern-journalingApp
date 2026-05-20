import express from 'express'
import {createUser , loginUser , updateUser , deleteUser } from '../controllers/userController.js'

const route = express.Router()

route.post('/register' , createUser)
route.post('/login' , loginUser)
route.put('/' , updateUser)
route.delete('/' , deleteUser)

export default route
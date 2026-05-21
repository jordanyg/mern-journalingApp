import { createEntry ,getEntriesByCategory ,getEntry ,updateEntry ,deleteEntry } from "../controllers/journalController.js";
import express from 'express'
import protect from '../middleware/authMiddleware.js'

const route = express.Router()

route.post('/create' ,protect, createEntry)
route.get('/' , protect,getEntry)
route.get('/:category' ,protect , getEntriesByCategory)
route.put('/:id',protect, updateEntry)
route.delete('/:id', protect , deleteEntry)

export default route
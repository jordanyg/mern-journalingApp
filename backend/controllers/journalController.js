import Journal from "../models/journalModel.js";
import asyncHandler from 'express-async-handler'


const createEntry = asyncHandler(async(req,res)=>{
    const {category , content} = req.body
    if(!req.body){
      return  res.status(400).json({message :'please enter entry'})
    }
    if(!category || !content){
       return res.status(400).json({message : 'fields cannot be empty'})
    }
    const entry =  await Journal.create({
        user : req.user.id,
        category,
        content
    })
    res.status(201).json(entry)
})


const getEntry = asyncHandler(async(req,res)=>{
    const entries = await Journal.find({user : req.user.id}).sort({ createdAt: -1 })
    res.status(200).json(entries)
})


const getEntriesByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params

  const entries = await Journal.find({
    user: req.user.id,
    category: category,
  }).sort({ createdAt: -1 })

  res.status(200).json(entries)
})

const updateEntry = asyncHandler(async(req,res)=>{
    const {content} = req.body


        const entry = await Journal.findById(req.params.id)
    if(!entry){
       return res.status(400).json({message : 'no such entry'})
    }

    if(entry.user.toString() !== req.user.id){
       return res.status(401).json({message : 'unauthorized'})
    }


    entry.content = content || entry.content

    const updatedEntry = await entry.save()
    res.status(200).json(updatedEntry)
})

const deleteEntry = asyncHandler(async(req,res)=>{
    const entry = await Journal.findById(req.params.id)
    if(!entry){
        return res.status(400).json({message : 'no such entry'})
    }
    if(entry.user.toString() !== req.user.id){
        return res.status(401).json({message:'unauthorized'})
    }

    await entry.deleteOne()
    res.status(200).json({message : 'entry deleted seccessfuly'})
})

export {createEntry , getEntry , getEntriesByCategory ,updateEntry ,deleteEntry}

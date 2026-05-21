import mongoose from "mongoose";
import User from "./userModel.js";


const journalSchema = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required : true , 
        ref: User
    },
    category: {
      type: String,
      required: true,
      enum: [
        "clarity",
        "mindset",
        "reflection",
        "audit",
        "recovery",
        "anxiety",
        "direction",
        "decision",
        "lifeDirection",
      ],
    },
    content : {
        type: String,
        required : true , 

    }
},{
    timestamps : true 
})

const Journal = mongoose.model('Journal' , journalSchema)

export default Journal
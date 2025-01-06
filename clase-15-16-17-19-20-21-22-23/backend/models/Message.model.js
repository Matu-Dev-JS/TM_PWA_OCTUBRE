/* 
channel (hace refencia a?)
sender (hace refencia a?)
content 
createdAt
modifiedAt
*/

import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
        require: true
    },
    sender: { //Que es? 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
})

const Message = mongoose.model("Message", messageSchema)

export default Message






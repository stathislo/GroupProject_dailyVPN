const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    senderUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    receiveUserId:{
        type:String
    },
    messagesSender:[{
        type:String
    }],
    messageReceive:[{
        type:String,
        DateMessageReceive:Date
    }],
    status:{
        type:String,
        default:"open"
    }
})

const ChatModel = mongoose.model("chats", ChatSchema)

module.exports = ChatModel
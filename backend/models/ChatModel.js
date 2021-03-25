const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    senderUserId:{
        type:String
    },
    receiveUserId:{
        type:String
    },
    messagesSender:[{
        type:String,
        DateMessage:Date
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
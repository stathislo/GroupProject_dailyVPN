const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    senderUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    receiveUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    messagesSender:[{
        type:String
    }],
    messageReceive:[{
        type:String
    }],
    status:{
        type:String,
        default:"open"
    },
    sendDate:{
        type:Date
    }
})

const ChatModel = mongoose.model("chats", ChatSchema)

module.exports = ChatModel
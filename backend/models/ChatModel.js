const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    senderUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    roleSender:{
        type:String
    },
    message:{
        type:String
    },
    status:{
        type:String,
        default:"open"
    },
    sendDate:{
        type:Date,
    },
    chatId:{
        type:mongoose.Schema.Types.String,
        ref:"users"
    }

}, {timestamps: true,})


const ChatModel = mongoose.model("chats", ChatSchema)

module.exports = ChatModel
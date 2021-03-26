const UserModel = require("../models/RegisterUserModel")
const ChatModel= require("../models/ChatModel")
const User = require("../../blog/modules/User")
const io = require("../apis/socket")

exports.postChat = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.findOne({senderUserId:req.session._id})
                .then(findUserMessage=>{
                    if(findUserMessage){
                        console.log(req.body.messagesSender)
                        findUserMessage.messagesSender.push(req.body.messagesSender)
                        findUserMessage.save()
                        res.send("success")
                        io.getIO().emit("chatMessage", { action:"putNewChat", findUserMessage:findUserMessage})
                    }else if(!findUserMessage){
                        const chatMessage = new ChatModel({
                            senderUserId:req.session._id,
                            messagesSender:req.body.messagesSender,
                            status:"open"
                        })
                        ChatModel.create(chatMessage, function(err,chat){
                            if(err){
                                console.log(err)
                            }else{
                                console.log(chat)
                                console.log(user.chatId)
                                user.chatId.push(chatMessage.senderUserId)
                                user.save()
                                io.getIO().emit('CreatechatMessage', { action:"create", chatMessage:chatMessage})
                                res.status(201).json({
                                    chatUserMessage:chatMessage
                                })
                            }
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        })
        .catch(err=>{

        })
    }
}

exports.getUserMessages = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.findOne({senderUserId:user._id})
                .populate("senderUserId")
                .then(getMessage=>{
                    io.getIO().emit("showChats", { action:"getChats", getAllMessage:getMessage})
                    res.status(200).json({
                        getMessage:getMessage
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
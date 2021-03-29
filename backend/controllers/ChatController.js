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
                        res.status(201)
                        io.getIO().emit("chatMessage", { 
                            action:"putNewChat", 
                            findUserMessage:findUserMessage,
                            body:[req.body.messagesSender]
                        })
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
                .populate("receiveUserId")
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

exports.postModeratorChat = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(moderator=>{
            if(moderator){
                ChatModel.findOneAndUpdate({senderUserId:req.body.senderUserId}, {receiveUserId:req.session._id}, {new:true})
                .then(updatedModeratorId=>{
                    if(updatedModeratorId){
                        ChatModel.findOne({senderUserId:req.body.senderUserId})
                        .populate("senderUserId")
                        .populate("receiveUserId")
                        .then(moderatorChat=>{
                            moderatorChat.messageReceive.push(req.body.moderatorchat)
                            moderatorChat.save()
                            res.status(201).json({
                                moderatorChat:moderatorChat
                            })
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    }
                })
                .catch(err=>{

                })

            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.getAllChatsMessagesModerator = (req, res, next)=>{
    if(req.session.user){
        ChatModel.find({})
        .populate("senderUserId")
        .populate("receiveUserId")
        .then(allChats=>{
            res.status(200).json({
                chats:allChats
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.getModeratorUserMessage = (req, res, next)=>{
    if(req.session.user){
        ChatModel.findOne({senderUserId:req.body.chatid})
        .populate("senderUserId")
        .populate("receiveUserId")
        .then(findMessage=>{
            console.log(findMessage)
            res.status(200).json({
                findMessage:findMessage
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
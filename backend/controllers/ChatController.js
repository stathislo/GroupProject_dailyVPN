const UserModel = require("../models/RegisterUserModel")
const ChatModel= require("../models/ChatModel")
const io = require("../apis/socket")

exports.postUserChat = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                const message = new ChatModel({
                    senderUserId:user._id,
                    message:req.body.message,
                    sendDate:Date.now(),
                    roleSender:"user"
                })
                ChatModel.create(message, (err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        io.getIO().emit("postuserchats", {action:"postuserchat", message:result})
                        //console.log(result)
                        res.status(201).json({
                            message:result
                        })
                    }
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
        .then(user=>{
            if(user){
            const moderatorMessage = new ChatModel({
                senderUserId:req.body.senderUserId,
                message:req.body.message,
                sendDate:Date.now(),
                roleSender:"moderator"
                })

                        ChatModel.create(moderatorMessage, (err,result)=>{
                            if(err){
                                console.log(err)
                            }else{
                                //console.log(result)
                                io.getIO().emit("postmoderatorchats123", {action:"postmoderatorchat", message:result})
                                res.status(201).json({
                                    moderator:user.firstName,
                                    message:result
                                })
                            }
                        })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.showBothMessages = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.find({senderUserId:req.body.senderUserId})
                .populate("senderUserId")
                .then(chats=>{
                    console.log(chats)
                   
                    res.status(200).json({
                        chats:chats
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

exports.showUserMessages = (req, res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.find({senderUserId:user._id})
                .sort({createdAt:1})
                .populate("senderUserId")
                .then(showUserChat=>{
                    console.log(showUserChat)
                    io.getIO().emit("userchat", { action:"userchats", message:showUserChat})
                    res.status(200).json({
                        showUserChat:showUserChat
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

exports.getAllChats=(req,res, next)=>{
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.find({})
                .populate("senderUserId")
                .then(resp=>{
                    const x = [...new Set(resp.map(x=>x.senderUserId))]
                    res.status(200).json({
                        x:x,
                        resp:resp
                    })
                    console.log(x)
                })
                // .distinct("senderUserId")
                // .populate("senderUserId")
                // .exec(function(err, chats){
                //     ChatModel.find({senderUserId: chats})
                //     .then(getChats=>{
                //         console.log(getChats)
                //     })
                //     .catch(err=>{
                //         console.log(err)
                //     })
                // })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

exports.getChatMsgsBetweenModeratorsAndUser = async(req,res,next) => {
    if(req.session.user){
        UserModel.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                ChatModel.find({senderUserId:req.body.userId})
                .populate("senderUserId")
                .then(chat=>{
                    res.status(200).json({
                        chat:chat
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

    // try{

    //     const findUser = await UserModel.findById({ _id: req.body.userID })

    //     console.log(findUser)

    //     const getChatsBetweenModeratorsAndUser = await ChatModel.find({ user: findUser }).populate('moderator').populate('user')



    //     res.status(201).json(getChatsBetweenModeratorsAndUser);

    // }catch(err){

    //     res.status(500).send("Error")

    // }

}
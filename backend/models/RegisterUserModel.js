const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
    ExpireToken:{
        type:Date
    },
    RegisterToken: {
        type:String
    },
    RegisterTokenExpiration:{
        type:Date
    },
    avantar:{
        type:String,
        default:"https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    role:{
        type:String
    },
    chatId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chats"
    }]

})

const RegisterUser = mongoose.model("users", RegisterUserSchema)

module.exports = RegisterUser
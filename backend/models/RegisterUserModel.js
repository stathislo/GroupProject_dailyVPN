const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    email:{
        type:String
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
        type:String
    },
    role:{
        type:String
    }

})

const RegisterUser = mongoose.model("users", RegisterUserSchema)

module.exports = RegisterUser
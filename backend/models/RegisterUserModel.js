const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    email:{
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
    }
})

const RegisterUser = mongoose.model("users", RegisterUserSchema)

module.exports = RegisterUser
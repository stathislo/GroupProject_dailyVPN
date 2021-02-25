const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const RegisterUser = mongoose.model("users", RegisterUserSchema)

module.exports = RegisterUser
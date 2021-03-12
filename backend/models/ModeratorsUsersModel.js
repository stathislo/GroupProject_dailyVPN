const mongoose = require("mongoose")

const ModeratorUserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    avantar:{
        type:String
    }
})

const ModeratorUserModel = mongoose.model("moderator", ModeratorUserSchema)

module.exports = ModeratorUserModel
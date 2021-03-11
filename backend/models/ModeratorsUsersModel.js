const mongoose = require("mongoose")

const ModeratorUserSchema = new mongoose.Schema({
    firstname:{
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
    }
})

const ModeratorUserModel = mongoose.model("moderators", ModeratorUserSchema)

module.exports = ModeratorUserSchema
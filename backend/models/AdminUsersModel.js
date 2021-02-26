const mongoose = require("mongoose")

const AdminUserSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const AdminUser = mongoose.model("admin", AdminUserSchema)

module.exports = AdminUser
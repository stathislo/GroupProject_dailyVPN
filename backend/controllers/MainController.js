const RegisterUser = require("../models/RegisterUserModel")
const AdminUser = require("../models/AdminUsersModel")

exports.getMain = (req, res, next)=>{
RegisterUser.findOne({email:req.session.email})
.then(user=>{
    if(user){
        res.send(user)
    }
})
.catch(err=>{
    console.log(err)
})
AdminUser.findOne({email:req.session.email})
.then(admin=>{
    if(admin){
        res.send(admin)
    }
})
.catch(err=>{
    console.log(err)
})
}
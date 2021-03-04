const RegisterUser = require("../models/RegisterUserModel")
const AdminUser = require("../models/AdminUsersModel")

exports.ifUserIsLoggedIn = (req, res, next)=>{
   if(req.session.user){
       res.status(200).send("loggedin")
   }
}

exports.getMain = (req, res, next)=>{
RegisterUser.findOne({email:req.session.email})
.then(user=>{
    if(user){
        res.send({
            loggedin:'loggedin',
            user:user
        })
    }else{
        res.send({loggedin: 'not loggedin'})
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
    res.status(500).send("Server Error")
})
}
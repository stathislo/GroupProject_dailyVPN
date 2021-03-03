const RegisterUser = require("../models/RegisterUserModel")
const AdminUser = require("../models/AdminUsersModel")

exports.ifUserIsLoggedIn = (req, res, next)=>{
    //check if the user is logged in and then redirect to the index page
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
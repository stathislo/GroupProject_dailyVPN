const AdminUser = require("../models/AdminUsersModel")
const bcrypt = require("bcryptjs")

exports.postAdminPanelLogin = (req, res, next)=>{
    AdminUser.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            bcrypt.compare(req.body.password, user.password, function(err,hash){
                if(err){
                    console.log(err)
                }else if(hash){
                    console.log("Perase")
                    req.session.admin = true
                    req.session.user = true
                    req.session.email = req.body.email
                    req.session._id = user._id
                    res.status(200).send("perase")
                }else{
                    console.log("Lathos password")
                    res.status(200).send("Lathos pass")
                }
            })
        }else{
            console.log("Not email")
            res.status(200).send("no email")
        }
    })
    .catch(err=>{
        console.log(err)
        })
}

exports.postAdminUser = (req, res, next)=>{
bcrypt.hash(req.body.password, 12, function(err,hash){
    const User = new AdminUser({
        email:req.body.email,
        password:hash
     })

     AdminUser.create(User, function(err, result){
         if(err){
             console.log(err)
         }else{
             console.log(result)
             res.status(200).send("Admin User created!!!!")
         }
     })
})
}


exports.getAdminPanel = (req, res, next)=>{
    AdminUser.findOne({email:req.session.email})
    .then(admin=>{
        res.send(admin)
    })
    .catch(err=>{
        console.log(err)
    })
}
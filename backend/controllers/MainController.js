const RegisterUser = require("../models/RegisterUserModel")
const AdminUser = require("../models/AdminUsersModel")

exports.ifUserIsLoggedIn = (req, res, next)=>{
   if(req.session.user){
    RegisterUser.findOne({email:req.session.email})
    .then(user=>{
        if(user){
            console.log(user.role)
            res.json({
                loggedin:'loggedin',
                user:user.role,
                userFirstName:user.firstName,
                userLastName:user.lastName,
                userId:user._id
            })
        }else{
            res.send("not loggedin")
        }
    })
    .catch(err=>{
        console.log(err)
    })
   }
}

exports.getMain = (req, res, next)=>{
RegisterUser.findOne({email:req.session.email})
.then(user=>{
    if(user){
        console.log(user)
        res.json({
            loggedin:'loggedin',
            user:user.email,
            userRole:user.role,
            userFirstName:user.firstName,
            userLastName:user.lastName,
            userId:user._id
        })
    }else{
        console.log("not logged in")
    }
})
.catch(err=>{
    console.log(err)
})
// AdminUser.findOne({email:req.session.email})
// .then(admin=>{
//     if(admin){
//         res.send(admin)
//     }
// })
// .catch(err=>{
//     console.log(err)
//     res.status(500).send("Server Error")
// })
}
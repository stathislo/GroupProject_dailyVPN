const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.postRegister = (req, res, next)=>{
bcrypt.hash(req.body.password, 12, function(err,hash){
    const User = new RegisterUser({
        email:req.body.email,
        password:hash
     })

     RegisterUser.create(User, function(err, result){
         if(err){
             console.log(err)
         }else{
             console.log(result)
             res.status(200).send("User created!!!!")
         }
     })
})
}
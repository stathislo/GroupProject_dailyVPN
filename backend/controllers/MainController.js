const RegisterUser = require("../models/RegisterUserModel")

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
}
const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.postLogin = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err,hash){
            if(err){
                console.log(err)
            }else if(hash){
                console.log("Perase")
                req.session.loggedin = true
                req.session.email = req.body.email
                req.session._id = user._id
                console.log(req.session)
                res.status(200).send("perase")
            }else{
                console.log("Lathos password")
                res.status(200).send("Lathos pass")
            }
        })
    }else{
        console.log("Not email")
        res.status(40).send("no email")
    }
})
.catch(err=>{
    console.log(err)
    })
}
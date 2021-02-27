const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")


exports.postForgot = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        bcrypt.hash(req.body.token, 1, function(err,hashToken){
            if(err){
                console.log(err)
            }else{
                console.log(hashToken)
                user.token = hashToken
                user.ExpireToken = Date.now() + 360000;
                res.status(200).send(user.token)
                user.save()
            }
        })
    }
})
.catch(err=>{
    console.log(err)
    })
}

exports.getReset = (req, res, next)=>{
    const id = req.params.id
    RegisterUser.findOne({token:id})
    .then(tokenId=>{
        if(tokenId){
            console.log("to brika")
            res.status(200).send(tokenId.token)
        }else{
            console.log("den iparxei")
            res.status(403).send("Forbidden")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postReset = (req, res, next)=>{
    RegisterUser.findOne({token:req.body.token})
    .then(findToken=>{
        if(findToken){
            bcrypt.hash(req.body.changeNewPassword, 12, function(err,newPassword){
                if(err){
                    console.log(err)
                }else{
                    console.log(newPassword)
                    RegisterUser.findOneAndUpdate({token:req.body.token}, {password:newPassword})
                    .then(passwordChanged=>{
                        console.log("o kwdikos allakse")
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            })
        }else{
            console.log("Den to brika")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
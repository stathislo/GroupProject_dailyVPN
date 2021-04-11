const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const transporter = require("../apis/sendgrid")

exports.postForgot = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        crypto.randomBytes(32, (err, buffer)=>{
            if(err){
                console.log(err)
            }else{
                const forgotToken = buffer.toString("hex")
                user.token = forgotToken
                user.ExpireToken = Date.now() + 36000000
                res.status(200).send(user.token)
                user.save()
            transporter.sendMail({
                to:user.email,
                from:"info@vpndaily.eu",
                subject:"Password reset",
                html:`
                <p>Reset your password by this <a href="http://localhost:3000/reset/${user.token}">Link</a></p>
                `
            })
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
    RegisterUser.findOne({token:id, ExpireToken:{$gt: Date.now()}})
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
            bcrypt.hash(req.body.changeNewPassword, 8, function(err,newPassword){
                if(err){
                    console.log(err)
                }else{
                    console.log(newPassword)
                    RegisterUser.findOneAndUpdate({token:req.body.token}, {password:newPassword}, {new:true, upsert:true})
                    .then(passwordChanged=>{
                        console.log("o kwdikos allakse")
                        res.status(201).send("Password Changed!")
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
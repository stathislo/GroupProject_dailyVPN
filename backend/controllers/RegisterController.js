const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const transporter = require("../apis/sendgrid")

// exports.postRegister = (req, res, next)=>{
// bcrypt.hash(req.body.password, 12, function(err,hash){
//     const User = new RegisterUser({
//         email:req.body.email,
//         password:hash
//      })

//      RegisterUser.create(User, function(err, result){
//          if(err){
//              console.log(err)
//          }else{
//              console.log(result)
//              res.status(200).send("User created!!!!")
//          }
//      })
//   })
// }

exports.postRegisterEmail = (req, res, next)=>{
crypto.randomBytes(32, (err, buffer)=>{
    if(err){
        console.log(err)
    }else{
        const registerToken = buffer.toString("hex")
        const EmailRegisterUser = new RegisterUser({
            email:req.body.email,
            RegisterToken : registerToken
        })
        RegisterUser.create(EmailRegisterUser, function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
                result.RegisterTokenExpiration = Date.now() + 33600000;
                result.save()
                res.send(result)
        RegisterUser.findOne({email:result.email})
        .then(emailTheUser=>{
            transporter.sendMail({
                to:emailTheUser.email,
                from:"info@vpndaily.eu",
                subject:"Password reset",
                html:`Confirm your email by this link <a href="http://localhost:5000/register/${emailTheUser.RegisterToken}" Link</a>`
            }).catch(err=>{
                console.log(err)
            })
            console.log(emailTheUser.email)
        })
             
            }
        })
    }
})

}

exports.getRegisterEmail = (req, res, next)=>{
    const registerid = req.params.id
    RegisterUser.findOne({RegisterToken:registerid})
    .then(getRegisterPage=>{
        if(getRegisterPage){
            console.log("nai")
            res.send(getRegisterPage)
        }else{
            console.log("oxi")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}


exports.postRegisterCreateUser = (req, res, next)=>{
bcrypt.hash(req.body.password, 12, function(err, hash){
    if(err){
        console.log(err)
    }else{
    RegisterUser.findOneAndUpdate({RegisterToken:req.body.registerToken, RegisterTokenExpiration:{$gt: Date.now()}}, {password:hash})
    .then(ifRegisterToken=>{
         console.log(ifRegisterToken)
         res.send(ifRegisterToken)
    })
    .catch(err=>{
        console.log(err)
    })

    }
})
}

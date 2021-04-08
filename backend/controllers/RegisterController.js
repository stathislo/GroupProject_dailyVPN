const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const transporter = require("../apis/sendgrid")
const PaymentModel = require("../models/PaymentsModel")


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

exports.getIfAlreadyRegistered = (req, res, next)=>{
    if(req.session.user){
        RegisterUser.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                res.status(200).json({
                    user:user,
                    loggedin:"loggedin"
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }else{
        res.status(400).json({
            loggedin:"not loggedin"
        })
    }
}

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
            // transporter.sendMail({
            //     to:emailTheUser.email,
            //     from:"info@vpndaily.eu",
            //     subject:"Password reset",
            //     html:`
            //     <p>Confirm your email by this <a href="http://localhost:3000/registerget/${emailTheUser.RegisterToken}">Link</a></p>
            //     `
            // })
            console.log("emailtheuser")
            .catch(err=>{
                console.log(err)
            })
        })
             
       
            }
        })
    }
})

}

exports.getRegisterEmail = (req, res, next)=>{
    const registerid = req.params.id
    RegisterUser.findOne({RegisterToken:registerid, RegisterTokenExpiration:{$gt: Date.now()}})
    .then(getRegisterPage=>{
        if(getRegisterPage){
            console.log("nai")
            res.status(200).send(getRegisterPage)
        }else{
            console.log("oxi")
            res.status(403).send("Expired")
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
    RegisterUser.findOneAndUpdate({RegisterToken:req.body.registerToken, RegisterTokenExpiration:{$gt: Date.now()}}, {firstName:req.body.firstName,lastName:req.body.lastName,role:"user",password:hash})
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

const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getIfUserIsLoggedIn = (req, res ,next)=>{
    RegisterUser.findOne({email:req.session.email})
    .then(ifUser=>{
        if(ifUser){
            res.status(200).send("loggedin")
        }else{
            console.log("kane loggin")
        }
    })
    .catch(err=>{
        console.log(err)
    })
    //check if the user is logged in and then redirect to the main loggin page
}

exports.postLogin = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err,hash){
            if(err){
                console.log(err)
            }else if(hash){
                console.log("Perase")
                req.session.user = true
                req.session.role = user.role
                req.session.email = req.body.email
                req.session.avantar = user.avantar
                req.session._id = user._id
                const token = jwt.sign({
                    email:user.email, 
                    userId:user._id.toString()
                }, 'vpndailysecret', { expiresIn: "1h" });

                res.status(201).json({
                    perase:"perase",
                    token:token,
                    userId:user._id.toString()
                })
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


//token JWT
// exports.getAuth = (req, res, next)=>{
//     const token =
// }
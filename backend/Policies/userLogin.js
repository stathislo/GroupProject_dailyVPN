const RegisterUser = require("../models/RegisterUserModel")

exports.loggedInPolicy = (req, res, next)=>{
    req.session.loggedin = true
    req.session.email = req.body.email
    req.session._id = user._id
}
const request = require("request")
const RegisterUser = require("../models/RegisterUserModel")

exports.getIfUserLoggedinRedirect = (req, res, next)=>{
    //check if the user is logged in and then redirect to the main loggin page
}

exports.getIndexIp = (req, res, next)=>{
const url = `http://ipwhois.app/json/8.8.4.4`

request(url, function(err, result){
    if(err){
        console.log(err)
    }else{
        const getIp = JSON.parse(result.body)
        console.log(getIp)
        res.status(200).send(getIp)
        
    }
})


}

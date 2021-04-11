const request = require("request")
const RegisterUser = require("../models/RegisterUserModel")

exports.getIfUserLoggedinRedirect = (req, res, next)=>{
RegisterUser.findOne({email:req.session.email})
.then(user=>{
    if(user){
        res.status(200).send('loggedin')
    }
})
.catch(err=>{
    console.log(err)
})
    
}

exports.getIndexIp = (req, res, next)=>{
const url = `http://ipwhois.app/json/8.8.8.8`

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

const request = require("request")

exports.getIndexIp = (req, res, next)=>{
const requestIp = req.ip
const url = `http://ipwhois.app/json/${requestIp}`

request(url, function(err, result){
    if(err){
        console.log(err)
    }else{
        const getIp = JSON.parse(result.body)
        console.log(getIp)
    }
})
}
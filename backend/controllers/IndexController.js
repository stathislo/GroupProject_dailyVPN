const request = require("request")

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

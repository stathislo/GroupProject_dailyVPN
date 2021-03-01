module.exports = (req, res, next)=>{
    if(!req.session.user){
        res.status(200).send("not loggedin")
    }else if(req.session.user){
        res.send("loggedin")
    }
    next()
}

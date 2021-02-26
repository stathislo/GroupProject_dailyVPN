module.exports = (req, res, next)=>{
    if(!req.session.moderator){
        res.status(403).send("not loggedin")
    }

    next()
}
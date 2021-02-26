module.exports = (req, res, next)=>{
    if(!req.session.admin){
        res.status(403).send("not loggedin")
    }

    next()
}
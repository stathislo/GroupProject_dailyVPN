exports.postLogout = (req, res, next)=>{
    if(req.session.loggedin){
        req.session.destroy(function(err,result){
            if(err){
                console.log(err)
            }else{
                res.status(200).send("logout")
            }
        })
    }
}
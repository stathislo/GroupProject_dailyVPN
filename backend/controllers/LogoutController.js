exports.postLogout = (req, res, next)=>{
    if(req.session.user){
        req.session.destroy(function(err,result){
            if(err){
                console.log(err)
            }else{
                res.status(200).send("logout")
            }
        })
    }else if(req.session.admin){
        req.session.destroy(function(err,result){
            if(err){
                console.log(err)
            }else{
                res.status(200).send("logout")
            }
        })
    }
}
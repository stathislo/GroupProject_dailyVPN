const CategoriesModel = require("../modules/Categories")

exports.postCreateCategory = (req, res, next)=>{

    const category = new CategoriesModel({
        name:req.body.name
    })
    CategoriesModel.create(category, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
}
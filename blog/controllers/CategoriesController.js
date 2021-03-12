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

exports.getPostOfCategory = async (req, res, next) => {
    try{
        const category = await CategoriesModel.find({ name: req.params.name}).populate("posts");
        res.status(200).json(category);
    } catch(err){
        res.status(500).send("Error")
    }
}
 
exports.getCategories = async (req,res,next) => {
    const categories = await CategoriesModel.find();
    res.json(categories)
}
const ProductModel = require("../models/ProductsModel")

exports.postProductFind = (req, res, next)=>{
    ProductModel.findOne({_id:req.body.productId})
    .then(product=>{
        console.log(product)
    })
    .catch(err=>{
        console.log(err)
    })
}
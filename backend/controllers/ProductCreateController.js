const ProductModel = require("../models/ProductsModel")

exports.postCreateProduct = (req, res, next)=>{
    const Product = new ProductModel({
        name:req.body.name,
        price:req.body.price,
    })

    ProductModel.create(Product, function(err,newProduct){
        if(err){
            console.log(err)
        }else{
            newProduct.start_date = Date.now()
            newProduct.end_date = Date.now() + 59000000
            newProduct.save()
            console.log(newProduct)
        }
    })
}
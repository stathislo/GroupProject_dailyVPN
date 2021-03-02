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

exports.getProductPage = (req, res, next)=>{
    const name = req.params.name

    ProductModel.findOne({name:name})
    .then(productPage=>{
        if(productPage){
        console.log(productPage)
        res.status(200).json(productPage)
        }else{
            res.status(404).send("not found")
        }

    })
    .catch(err=>{
        console.log(err)
    })
}


const ProductModel = require("../models/ProductsModel")
const RegisterUserModel = require('../models/RegisterUserModel')

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
  RegisterUserModel.findOne({email:req.session.email})
  .then(ifUser=>{
      if(ifUser){
        const name = req.params.name

        ProductModel.findOne({name:name})
        .then(productPage=>{
            if(productPage){
            console.log(productPage)
            res.status(200).json({
                loggedin:"loggedin",
                products:productPage,
                user:ifUser    
            })
            }else{
                res.status(404).send("not found")
            }
    
        })
        .catch(err=>{
            console.log(err)
        })
      }else{
        console.log("kane loggin")
      }
  })
  .catch(err=>{
      console.log(err)
  })  

}


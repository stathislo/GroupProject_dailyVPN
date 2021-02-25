const mongoose = require("mongoose")

const ProductModelSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    }
})

const Product = mongoose.model("products", ProductModelSchema)

module.exports = Product
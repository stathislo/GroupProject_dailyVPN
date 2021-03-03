const mongoose = require("mongoose")

const PaymentSchema = mongoose.Schema({
        ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"},
        ProductName:{
        type:mongoose.Schema.Types.String,
        ref:"products"},
        ProductPrice:{
        type:mongoose.Schema.Types.String,
        ref:'products'},
        ProductStartDate:{
        type:mongoose.Schema.Types.Date,
        ref:"products"},
        ProductEndDate:{
        type:mongoose.Schema.Types.Date,
        ref:'products'},

    CheckoutToken:{
        type:String
    },
     userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
    },
    email:{
    type:mongoose.Schema.Types.String,
    ref:"users"},
    
    checkIfPaid:{
        type:Boolean
        }
    
})

const PaymentModel = mongoose.model("payments", PaymentSchema)

module.exports = PaymentModel
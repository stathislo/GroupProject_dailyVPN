const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")

const PaymentController = require("../controllers/PaymentsController")

//payments
router.post("/payment/productlow", PaymentController.getPayment)


//cancel
router.get("/cancel", PaymentController.CancelPayment)
module.exports = router
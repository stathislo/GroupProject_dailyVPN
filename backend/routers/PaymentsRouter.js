const express = require("express")
const router = express.Router()

const PaymentController = require("../controllers/PaymentsController")

//payments
router.post("/payment/productlow", PaymentController.getPaymentProductLow)
router.post("/payment/productmedium", PaymentController.getPaymentProductMedium)
router.post("/payment/producthigh", PaymentController.getPaymentProductHigh)

//cancel
router.get("/cancel", PaymentController.getCanceledPayment)
module.exports = router
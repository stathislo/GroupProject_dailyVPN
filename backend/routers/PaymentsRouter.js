const express = require("express")
const router = express.Router()

const PaymentController = require("../controllers/PaymentsController")

router.post("/payment", PaymentController.getPaymentBuy)

module.exports = router
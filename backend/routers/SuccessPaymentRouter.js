const express = require("express")
const router = express.Router()



const SuccessPaymentController = require("../controllers/SuccessPaymentController")

router.get("/success", SuccessPaymentController.OnPaymentSuccess)

module.exports = router
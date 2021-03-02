const express = require("express")
const router = express.Router()


const SuccessPaymentController = require("../controllers/SuccessPaymentController")

router.get("/success/productlow", SuccessPaymentController.OnPaymentSuccessOfProductLow)
router.get("/success/productmedium", SuccessPaymentController.OnPaymentSuccessOfProductMedium)
router.get("/success/producthigh", SuccessPaymentController.OnPaymentSuccessOfProductHigh)

module.exports = router
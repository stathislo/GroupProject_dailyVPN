const express = require("express")
const router = express.Router()

const ProductFindController = require("../controllers/ProductFindController")

router.get("/product", ProductFindController.postProductFind)
router.get("/product/:name", ProductFindController.getProductPage)

module.exports = router
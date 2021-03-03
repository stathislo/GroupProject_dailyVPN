const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")

const ProductFindController = require("../controllers/ProductFindController")

router.get("/product", ProductFindController.postProductFind)
router.get("/product/:name", isUserAuth, ProductFindController.getProductPage)

module.exports = router
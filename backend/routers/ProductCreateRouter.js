const express = require("express")
const router = express.Router()

const ProductCreateController = require("../controllers/ProductCreateController")

router.post("/createproduct", ProductCreateController.postCreateProduct)

module.exports = router
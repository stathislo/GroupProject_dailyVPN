const express = require("express")
const router = express.Router()

const ProductFindController = require("../controllers/ProductFindController")

router.post("/productfind", ProductFindController.postProductFind)

module.exports = router
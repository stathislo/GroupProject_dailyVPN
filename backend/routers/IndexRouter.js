const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/IndexController")

router.get("/index", IndexController.getIndexIp)

module.exports = router
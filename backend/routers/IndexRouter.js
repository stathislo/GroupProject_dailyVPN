const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")

const IndexController = require("../controllers/IndexController")


router.get("/index", IndexController.getIndexIp)
router.get("/indexRedirect", isUserAuth, IndexController.getIfUserLoggedinRedirect)

module.exports = router
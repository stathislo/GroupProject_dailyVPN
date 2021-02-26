const express = require('express')
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")

const MainController = require("../controllers/MainController")

router.get("/", isUserAuth, MainController.getMain)

module.exports = router
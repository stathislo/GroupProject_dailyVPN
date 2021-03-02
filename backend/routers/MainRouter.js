const express = require('express')
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")
const isAdminAuth = require("../Policies/adminLogin")
const isModeratorAuth = require("../Policies/moderatorLogin")

const MainController = require("../controllers/MainController")

router.get("/main", isUserAuth, MainController.ifUserIsLoggedIn)
router.get("/", MainController.getMain)

module.exports = router
const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")
const isAdminAuth = require("../Policies/adminLogin")

const LogoutController = require("../controllers/LogoutController")


router.get("/logout", isUserAuth, LogoutController.postLogout)

module.exports = router
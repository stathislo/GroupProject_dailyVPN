const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")


const LoginController = require("../controllers/LoginController")

router.get("/login", isUserAuth, LoginController.getIfUserIsLoggedIn)
router.post("/loginform", LoginController.postLogin)


module.exports = router
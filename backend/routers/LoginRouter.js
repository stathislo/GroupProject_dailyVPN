const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginController")
const isUserAuth = require("../Policies/userLogin")


router.post("/loginform", LoginController.postLogin)

router.get("/", )


module.exports = router
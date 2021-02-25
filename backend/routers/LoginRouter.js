const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginController")

router.post("/loginform", LoginController.postLogin)


module.exports = router
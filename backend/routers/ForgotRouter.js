const express = require("express")
const router = express.Router()

const forgotController = require("../controllers/ForgotController")

router.post("/forgotform", forgotController.postForgot)

router.get("/reset/:id", forgotController.getReset)

router.post("/resetform", forgotController.postReset)

module.exports = router
const express = require("express")
const router = express.Router()
const isUserAuth = require("../Policies/userLogin")

const RegisterController = require("../controllers/RegisterController")

router.get("/alreadyregistered", RegisterController.getIfAlreadyRegistered)
router.post("/registerform", RegisterController.postRegisterEmail)
router.get("/register/:id", RegisterController.getRegisterEmail)

router.post("/registerformcreate", RegisterController.postRegisterCreateUser)

module.exports = router
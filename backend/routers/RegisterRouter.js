const express = require("express")
const router = express.Router()

const RegisterController = require("../controllers/RegisterController")

router.post("/registerform", RegisterController.postRegisterEmail)
router.get("/register/:id", RegisterController.getRegisterEmail)

router.post("/registerformcreate", RegisterController.postRegisterCreateUser)

module.exports = router
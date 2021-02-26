const express = require("express")
const router = express.Router()
const isAdminAuth = require("../Policies/adminLogin")

const AdminController = require("../controllers/AdminController")

router.post("/adminlogin", AdminController.postAdminPanelLogin)
router.post("/admincreate", AdminController.postAdminUser)
router.get("/admin", isAdminAuth, AdminController.getAdminPanel)

module.exports = router
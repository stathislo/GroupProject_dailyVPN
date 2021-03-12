const express = require("express")
const router = express.Router()

const CategoriesController = require("../controllers/CategoriesController")

router.post("/categorycreate", CategoriesController.postCreateCategory)

module.exports = router
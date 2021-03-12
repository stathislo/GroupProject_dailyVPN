const express = require("express")
const router = express.Router()

const CategoriesController = require("../controllers/CategoriesController")

router.post("/categorycreate", CategoriesController.postCreateCategory)

router.get('/getPostsByCategory/:name', CategoriesController.getPostOfCategory)
router.get('/getAllCategories', CategoriesController.getCategories)

module.exports = router
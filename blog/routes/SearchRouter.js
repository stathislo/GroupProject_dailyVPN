const express= require("express")
const router = express.Router()

const SearchController = require("../controllers/SearchController")

router.get("/search", SearchController.getSearchByPostName)

module.exports = router
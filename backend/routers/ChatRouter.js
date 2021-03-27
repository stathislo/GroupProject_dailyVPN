const express = require("express")
const router = express.Router()

const ChatController = require("../controllers/ChatController")
const ChatModel = require("../models/ChatModel")

router.post("/postuserchat", ChatController.postChat)
router.get('/getusermessages', ChatController.getUserMessages)

router.post("/postmoderatorchat", ChatController.postModeratorChat)

module.exports = router
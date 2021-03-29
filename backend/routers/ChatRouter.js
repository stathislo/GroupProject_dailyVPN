const express = require("express")
const router = express.Router()

const ChatController = require("../controllers/ChatController")
const ChatModel = require("../models/ChatModel")

router.post("/postuserchat", ChatController.postChat)
router.get('/getusermessages', ChatController.getUserMessages)

router.post("/postmoderatorchat", ChatController.postModeratorChat)

router.get("/getmoderatorchat", ChatController.getAllChatsMessagesModerator)
router.post("/getmoderatormessages", ChatController.getModeratorUserMessage)

module.exports = router
const express = require("express")
const router = express.Router()

const ChatController = require("../controllers/ChatController")

router.post("/postuserchat", ChatController.postChat)
router.get('/getusermessages', ChatController.getUserMessages)

module.exports = router
const express = require("express")
const router = express.Router()

const ChatController = require("../controllers/ChatController")

router.post("/postuserchat", ChatController.postUserChat)
router.post("/postmoderatorchat", ChatController.postModeratorChat)

router.get("/showallchats", ChatController.showBothMessages)
router.get("/showuserchats", ChatController.showUserMessages)
router.get("/getallchats", ChatController.getAllChats)
router.post("/getChatMsgsBetweenModeratorsAndUser", ChatController.getChatMsgsBetweenModeratorsAndUser)

module.exports = router
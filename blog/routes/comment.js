const express = require("express")
const router = express.Router()

const CommentsController = require("../controllers/CommentController")

router.post("/postcomment", CommentsController.createComment)
router.get('/getcomments/:postID', CommentsController.getAllComments)

module.exports = router


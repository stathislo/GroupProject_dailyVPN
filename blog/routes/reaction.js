const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/ReactionController');

router.post('/addReaction', ReactionController.addReactionToPost);
router.get(
  '/deleteReaction/:reactionID',
  ReactionController.deleteReactionFromPost,
);
router.get(
  '/countOfReactionsOfPost/:postID',
  ReactionController.getCountOfReactionsOfPost,
);

module.exports = router;

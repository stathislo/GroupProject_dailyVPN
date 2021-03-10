const express = require('express');
const router = express.Router();
// const Post = require('../modules/Post');
const PostController = require('../controllers/PostController');

router.get('/', PostController.getAllPosts);
router.get('/:postID', PostController.getPostById);
router.post('/userCreatesPost/:userID', PostController.userCreatesPost);
router.get('/postsOfUser/:userID', PostController.getPostsOfUser);
router.patch('/update/:postID', PostController.userUpdatesPost);
router.delete('/delete/:postID', PostController.deleteAPost);

module.exports = router;

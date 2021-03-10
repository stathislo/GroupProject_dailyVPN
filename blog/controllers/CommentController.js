const Comment = require('../modules/Comment');
const User = require('../modules/User');
const Post = require('../modules/Post');

module.exports = {
  // User creates a comment
  createComment: async (req, res) => {
    try {
      const user = await User.findById({ _id: req.body.userID });
      const post = await Post.findById({ _id: req.body.postID });

      const newComment = new Comment({
        content: req.body.content,
        user: user,
        post: post,
      });

      await newComment.save();
      res.status(200).send({ message: 'A Comment created successfully!' });
    } catch (err) {
      res.status(500).send({ message: 'Error on comment creation!' });
    }
  },

  // Delete a comment
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete({ _id: req.body.commentID });
      res.status(200).send({
        message: `Comment with id = ${req.body.commentID} has been deleted!`,
      });
    } catch (err) {
      res.status(500).send({ message: 'Error on delete comment!' });
    }
  },
};

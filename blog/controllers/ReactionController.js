const Post = require('../modules/Post');
const User = require('../modules/User');
const Reaction = require('../modules/Reaction');

module.exports = {
  // Add a reaction to post
  addReactionToPost: async (req, res) => {
    try {
      const user = await User.findById({ _id: req.body.userID });
      const post = await Post.findById({ _id: req.body.postID });
      const reaction = await Reaction.findOne({
        user: { _id: user.id },
        post: { _id: post.id },
      });

      if (reaction === null) {
        const newReaction = new Reaction({
          type: req.body.type,
          user: user,
          post: post,
        });

        await newReaction.save();
        res.status(200).send({
          message: `User with id = ${user._id} , ${newReaction.type}D the post!`,
        });
      } else {
        await Reaction.findByIdAndUpdate(
          { _id: reaction.id },
          { type: req.body.type },
        );
        res.status(200).send({
          message: `The reaction on post with id = ${post.id} has been updated!`,
        });
      }
    } catch (err) {
      res.status(500).send('Error!');
    }
  },

  // Delete reaction from post
  deleteReactionFromPost: async (req, res) => {
    try {
      await Reaction.findByIdAndDelete({ _id: req.params.reactionID });
      res.status(200).send({ message: 'A reaction has been removed!' });
    } catch (err) {
      res.status(500).send({ message: 'Error' });
    }
  },

  // Get the sum of likes and dislikes of a post
  getCountOfReactionsOfPost: async (req, res) => {
    let countOfLikes = 0;
    let countOfDislikes = 0;
    try {
      const reactionsOfPost = await Reaction.find({ post: req.params.postID });
      reactionsOfPost.map((reaction) => {
        reaction.type === 'LIKE' ? countOfLikes++ : countOfDislikes++;
      });
      res.status(200).send({ countOfLikes, countOfDislikes });
    } catch (err) {}
  },
};

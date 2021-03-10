const User = require('../modules/User');
const Post = require('../modules/Post');

module.exports = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send({ message: 'The are no users!' });
    }
  },

  // Get a user by ID
  getUserById: async (req, res) => {
    const userID = req.params.userID;

    try {
      await Post.findOne({ _id: userID });
      res
        .status(200)
        .send({ message: ' The user has been created successfully!' });
    } catch (err) {
      res
        .status(500)
        .send({ message: `User with id = ${userID} does not exists !` });
    }
  },
};

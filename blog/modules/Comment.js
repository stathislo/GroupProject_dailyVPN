const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  sendDate: {
    type: Date,
    default: Date.now(),
  },

  reaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Comment', CommentSchema);

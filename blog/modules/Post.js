const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  userId: {
    type:String
  },

  userEmail:{
    type:String
  },

  userFirstName:{
    type:String
  },

  userLastName:{
    type:String
  },

  userAvantar:{
    type:String
  },

  image:{
    type:String
  },

  category:{
    type:mongoose.Schema.Types.String,
    ref:"Categories"
  },
  categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Categories"
  },
  reaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],

  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],

});

module.exports = mongoose.model('Post', PostSchema);

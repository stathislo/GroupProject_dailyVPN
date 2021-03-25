const Post = require('../modules/Post');
const User = require('../modules/User');
const Category = require("../modules/Categories")

module.exports = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.send({ 
        message: 'The are no posts!' 
      });
    }
  },

  // Get a post
  getPostById: async (req, res) => {
    const postID = req.params.postID;

    // try {
    //   await Post.findOne({ _id: postID });
    //   res
    //     .status(200)
    //     .json();
    // } catch (err) {
    //   res.send({ message: `Post with id = ${postID} does not exists !` });
    // }
    Post.findOne({_id:postID})
    .populate("comment")
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      console.log(err)
    })
  },

  // Delete a post
  deleteAPost: async (req, res) => {
    const postID = req.params.postID;
    try {
      await Post.findByIdAndDelete({ _id: postID });
      res
        .status(200)
        .send(`Post with id = ${postID} has been deleted successfully!`);
    } catch (err) {
      res.send(`Post with id = ${postID} does not exists!`);
    }
  },

  // Get all the posts of a user
  getPostsOfUser: async (req, res) => {
    const userID = req.params.userID;

    try {
      const user = await User.findById({ _id: userID }).populate('posts');
      user.posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return Math.abs(dateB) - Math.abs(dateA);
      });

      res.status(200).send(user);
    } catch (err) {
      res.send('error');
    }
  },

  // Create a post for user
  userCreatesPost: async (req, res) => {
    // try {


        const post = new Post({
          title: req.body.title,
          description: req.body.description,
          image:req.body.image,
          userId:req.body.userId,
          userEmail:req.body.userEmail,
          userFirstName:req.body.userFirstName,
          userLastName:req.body.userLastName,
          userAvantar:req.body.userAvantar,
          category:req.body.category,
          categoryId:req.body.categoryid
        });
  
        Post.create(post,function(err,result){
          if(err){
            console.log(err)
          }else{
            console.log(result)
            Category.findOne({name:req.body.category})
            .then(category=>{

                category.posts.push(result._id)
                category.save()
                console.log(category)
              
            })
            .catch(err=>{
              console.log(err)
            })

          }
        })
      

 
  

    //   category.posts.push(post._id)
    //   await post.save();
    //   await category.save();
    //   res.status(200).send('Success');
    // } catch (err) {
    //   res.send({ message: 'Error on post creation!' });
    // }
  },

  // User updates a post
  userUpdatesPost: async (req, res) => {
    const postID = req.params.postID;
    try {
      await Post.findOneAndUpdate(
        {
          _id: postID,
        },
        {
          title: req.body.title,
          description: req.body.description,
        },
      );
      res
        .status(200)
        .send(`Post with id = ${postID} has been updated successfully!`);
    } catch (err) {
      res.send(`Failed to update the post with id = ${postID}.`);
    }
  },
};



const Post = require("../models/PostModel");

const getPostsById = async (id) => {
  const posts = await Post.find({ id: id });
  return posts;
};

const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const createPost = async (model) => {
  const post = new Post({ ...model });
  await post.save();
};

const deletePost = async (id) => {
  const post = Post.deleteOne({ id: id });
  return post;
};

module.exports = { getPostsById, getPosts, createPost, deletePost };

const service = require("../services/postService.js");

const getPosts = async (req, res) => {
  const posts = await service.getPosts();
  res.json({
    posts: posts,
  });
};

const getPostsByUser = async (req, res) => {
  const posts = await service.getPostsById(req.params.id);
  res.json({
    status: 200,
    posts: posts,
  });
};

const createPost = async (req, res) => {
  const post = await service.createPost(req.body);
  res.json({
    status: 200,
    post: post,
  });
};

const updatePost = async (req, res) => {
  const post = await service.updatePost(req.params.id, req.body);
  res.json({
    status: 200,
    post: post,
  });
};

const deletePost = async (req, res) => {
  const post = await service.deletePost(req.params.id);
  res.json({
    status: 200,
    post: post,
  });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  getPostsByUser,
  deletePost,
};

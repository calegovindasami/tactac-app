const service = require("../services/postService.js");

const getPosts = async (req, res) => {
  const posts = await service.getPosts();
  res.json({
    posts: posts,
  });
};

const createPost = async (req, res) => {
  await service.createPost(req.body);
  res.sendStatus(200);
};

const updatePost = async (req, res) => {
  await service.updatePost(req.params.id, req.body);
  res.sendStatus(200);
};

module.exports = { getPosts, createPost, updatePost };

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  image_url: { type: String, required: false },
  likes: { type: Number, required: true },
});

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;

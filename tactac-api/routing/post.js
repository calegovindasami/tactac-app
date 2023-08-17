const express = require("express");
const controller = require("../controllers/postController");
const router = express.Router();

router.get("/", controller.getPosts);
router.get("/:id", controller.getPostsByUser);
router.post("/", controller.createPost);
router.put("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);

module.exports = router;

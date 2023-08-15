const express = require("express");
const controller = require("../controllers/postController");
const router = express.Router();

router.get("/", controller.getPosts);
router.post("/", controller.createPost);
router.put("/:id", controller.updatePost);

module.exports = router;

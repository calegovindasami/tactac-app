const express = require("express");
const controller = require("../controllers/postController");
const router = express.Router();

router.get("/", controller.getPosts);
router.post("/", controller.createPost);

module.exports = router;

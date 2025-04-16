const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.js");

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);
router.post("/updatePost/:id", updatePost);
router.post("/deletePost/:id", deletePost);

module.exports = router;

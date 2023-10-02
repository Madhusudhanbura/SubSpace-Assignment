const express = require("express");
const router = express.Router();

const { getBlogStats } = require("../controllers/getBlogStats");
const { getBlogs } = require("../middleware/getBlogs");

router.get("/blog-stats", getBlogs, getBlogStats);

module.exports = router;
